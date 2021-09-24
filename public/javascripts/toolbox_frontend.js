document.addEventListener("DOMContentLoaded", (e) => {
  const toolboxes_container = document.querySelector("#toolbox_list_container");

  // console.log(post_toolbox, patch_toolbox, delete_toolbox);

  // event listener to add a shelf div
  //fetch shelves
  //create div with new shelf inisde it with create element
  //append new shelf to .new_shelf as child
  // make template for card of shelf
  //pass in variables to create card

  toolboxes_container.addEventListener("click", async (e) => {
    e.preventDefault();

    if (e.target.classList.contains("toolbox_delete_button")) {
      console.log("**INSIDE delete_toolbox EVENT**");

      const toolbox_id = e.target.value;

      console.log(toolbox_id);

      await fetch("/api_toolboxes", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ toolbox_id: toolbox_id }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  });

 
});
