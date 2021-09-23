// document.addEventListener("DOMContentLoaded", (event)=>{

//     const search = document.getElementById("search_bar");

//     search.addEventListener("submit", async (e) => {
//         e.preventDefault();
//         const name = document.getElementById("search_box").value
//         console.log(name)
//         const body = { name }
//         try {
//             const res = await fetch("/search", {
//                 method: "GET",
//                 body: JSON.stringify(body),
//                 headers: {
//                     "Content-Type": "application/json"
//                 }
//             })
//             if(!res.ok){
//                 throw res
//             }
//         } catch {
//             alert("Error ocurred")
//         }
//     })

// });
