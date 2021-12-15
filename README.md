# Welcome to Ace Api
Are you tired of wondering if there is the prefect Api for your project? Are you sick of not knowing if a specific Api is going to meet your needs? Then Ace Api is the answer to your prayers!

Ace Api (a goodreads clone) is designed to help developers find the perfect Api for their project. Ace Api allows one to quickly search, read reviews, rate, and organize Api's into custom toolboxes. Ace Api also provides an easy way to access Api documentation, description, and average review rating.

- Visit [Ace Api](https://ace--api.herokuapp.com) to start implementing Api's today!
- For more information please visit our [wiki](https://github.com/mkoerner570/goodreads-express-project/wiki).

- Ace Api utilizes [Javascript](https://developer.mozilla.org/en-US/docs/Web/javascript) along with [Express](https://expressjs.com/) and [Pug](https://pugjs.org/api/getting-started.html) to generate a dynamic and responsive web application. All UI design was created using [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS).

- We enjoyed creating the content search feature and are proud of it's ability to search our database for Api names or tags that are similar to the users input (case-insensitive), and also provides the user with visual feedback if nothing is found.
- The functionality present on an individual Api's page also features the full range of CRUD functionality and error handling. On this page users can create, read, update, and delete reviews. At the same time they can also update an individual Api's implementation status and see it's average review based on all our users feedback.
- One of the challenges of building this site was the DOM manipulation via javascript to create the asynchronous and dynamic features contained in reviews and toolboxes functionality. Another was the complicated queries necessitated by the relationships between the tables in our database. We were able to overcome this obstacles by with some good old fashioned elbow grease and working together as a team to dismantle obstacles into smaller more managable pieces.

## Code snippet highlights:

- pug mixin used to render Api cards:

```pug
mixin api_card(api, toolboxes)
	div
		.api_card_top
			span.card_logo_container
				a(href=`/apis/${api.id}`)
					img.card_logo_img(src=`${api.logo_url}`, alt=`${api.name}`)
			span.api_card_content
				a(href=`/apis/${api.id}`)
					h2= api.name
				.api_card_text Category: #{ api.Tag.name }
					if api.free
						.api_card_text Free to Use
					else
						.api_card_text Paid
					div: a#ext_website(href=`${api.website}`, target='_blank') Website
		section.api_description
			p.api_card_text= api.description
```

- Avg rating and search function:

```js
const reviewAvgRating = async (api_id) => {
	let review_avg = await db.Review.findAll({
		where: {
			api_id,
		},
		attributes: [[Sequelize.fn('AVG', Sequelize.col('rating')), 'avgRating']],
	});

	review_avg = review_avg[0];
	review_avg = JSON.stringify(review_avg);
	review_avg = JSON.parse(review_avg);

	//Trim decimals
	const avgNumber = parseFloat(review_avg.avgRating).toFixed(1);

	return avgNumber;
};

async function searchApis(box) {
	const results = await Api.findAll({
		where: {
			description: {
				[Op.iLike]: `%${box}%`,
			},
		},
		include: {
			model: Tag,
		},
	});
	return results;
}
```

- Deletion of custom toolbox:

```js
document.addEventListener('DOMContentLoaded', (e) => {
	const toolboxes_container = document.querySelector('#toolbox_list_container');

	toolboxes_container.addEventListener('click', async (e) => {
		if (e.target.classList.contains('toolbox_delete_button')) {
			const toolbox_id = e.target.value;

			await fetch('/api_toolboxes', {
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ toolbox_id: toolbox_id }),
			});

			const toolbox = document.getElementById(`toolbox_header_${toolbox_id}`);
			const toolbox_menu = document.getElementById(
				`toolbox_delete_${toolbox_id}`
			);

			toolbox.remove();
			toolbox_menu.remove();
		}
	});
});
```
