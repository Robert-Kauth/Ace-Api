document.addEventListener("DOMContentLoaded", (event)=>{
    const deleteButtons = document.getElementById("review_container")

    deleteButtons.addEventListener("click", async (e) => {
        if (e.target.classList.contains("delete_buttons")) {
            let reviewId = e.target.id;
            const reviewNumber = reviewId.split("review_")[1]

            try {
                const res = await fetch(`/reviews/${reviewNumber}`, {
                    method: "DELETE"
                })

                if (!res.ok) {
                    throw res;
                } 

            } catch (err) {

            }

        }
    });



});
