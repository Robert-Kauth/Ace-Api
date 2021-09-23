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

    const addForm = document.getElementById("implementation")

    addForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(addForm);
        const api_id = formData.get("api_id");
        const toolbox_id = formData.get("toolbox_id");
        const body = { api_id, toolbox_id }

        try {
            const res = await fetch("/implementations", {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (!res.ok) {
                throw res;
            }
        } catch (err) {
            alert("Error Occured. Refresh the page and try again");
        }

    })

});
