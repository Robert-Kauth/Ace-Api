document.addEventListener("DOMContentLoaded", (event)=>{
    console.log("hello")
    const deleteButtons = document.getElementById("myToolboxes_container")

    deleteButtons.addEventListener("click", async (e) => {
        if (e.target.classList.contains("delete_imp_status")) {
            console.log("clicked")
            // let impStatus = e.target.id;
            // const reviewNumber = reviewId.split("_")[0];

            // console.log(reviewNumber)

            // try {
            //     const res = await fetch(`/implementations`, {
            //         method: "DELETE"
            //     })

            //     if (!res.ok) {
            //         throw res;
            //     } else {
            //         const review = document.getElementById(`review_${reviewNumber}`);
            //         review.remove();
            //     }

            // } catch (err) {
            //     alert("Error Occured. Refresh the page and try again")
            // }
        }
    });


});
