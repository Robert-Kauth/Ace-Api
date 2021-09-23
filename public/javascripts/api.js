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

    const addForm = document.getElementById("update_implementation")

    addForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(addForm);
        const api_id = formData.get("api_id");
        const old_toolbox = formData.get("old_toolbox");
        let toolbox = formData.get("toolbox_id");
        toolbox = toolbox.split("_");
        const toolbox_id = toolbox[0];
        const toolbox_name = toolbox[1];

        const body = { api_id, toolbox_id, old_toolbox }

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
            } else {
                const implementationSection = document.getElementById("update_implementation");
                if (old_toolbox) {
                    implementationSection.innerHTML = `<p id="updated_status">Updated to: <div id="toolbox_div_2"> ${toolbox_name}</span></p>`
                } else {
                    implementationSection.innerHTML = `<p id="updated_status">Added to: <div id="toolbox_div_2"> ${toolbox_name}</span></p>`
                }
            }
        } catch (err) {
            alert("Error Occured. Refresh the page and try again");
        }

    })
});
