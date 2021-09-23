document.addEventListener("DOMContentLoaded", (event)=>{
    const deleteButtons = document.getElementById("review_container")

    deleteButtons.addEventListener("click", async (e) => {
        if (e.target.classList.contains("delete_buttons")) {
            let reviewId = e.target.id;
            const reviewNumber = reviewId.split("_deletereview_")[1]
            console.log(reviewNumber)
            try {
                const res = await fetch(`/reviews/${reviewNumber}`, {
                    method: "DELETE"
                })

                if (!res.ok) {
                    throw res;
                } else {
                    const review = document.getElementById(`review_${reviewNumber}`);
                    review.remove();
                }

            } catch (err) {
                alert("Error Occured. Refresh the page and try again")
            }
        }
    });

    // const tbc_ctrl_group = document.querySelector(".tbc_ctrl_group")
    // tbc_ctrl_group.addEventListener("click", async (event) => {
    //     if (event.target === ) {

    //     }
    // })
});
