document.addEventListener("DOMContentLoaded", (event)=>{

    const deleteButtons = document.getElementById("myToolboxes_container")

    deleteButtons.addEventListener("click", async (e) => {
        if (e.target.classList.contains("delete_imp_status")) {

            let impStatus = e.target.id;
            impStatus = impStatus.split("_")
            const api_id = impStatus[1];
            const toolbox_id = impStatus[3];

            const body = { api_id, toolbox_id };
            console.log(body)

            try {
                const res = await fetch(`/implementations`, {
                    method: "DELETE",
                    body: JSON.stringify(body),
                    headers: {
                    "Content-Type": "application/json"
                    }
                })

                if (!res.ok) {
                    throw res;
                } else {
                    const card = document.getElementById(`api_${api_id}toolbox`);
                    const container = card.parentElement;

                    const newElement = document.createElement("p");
                    newElement.innerText = "Removed API";
                    card.remove();
                    container.appendChild(newElement)
                }

            } catch (err) {
                alert("Error Occured. Refresh the page and try again")
            }
        }
    });


});
