document.addEventListener("DOMContentLoaded", (e) => {
    const toolboxes_container = document.querySelector("#toolbox_list_container");

    console.log(post_toolbox, patch_toolbox, delete_toolbox);

    // event listener to add a shelf div
    //fetch shelves
    //create div with new shelf inisde it with create element
    //append new shelf to .new_shelf as child
    // make template for card of shelf
    //pass in variables to create card

    toolboxes_container.addEventListener("click", async (e) => {
      e.preventDefault();

      console.log("**INSIDE delete_toolbox EVENT**");
      if (e.target.name === "toolbox_delete_button") {
        const toolbox_id = e.target.value
        console.log(toolbox_id);
        await fetch("/api/toolboxes", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({toolbox_id: toolbox_id}),
        })
        .then(response => response.json())
        .then(data => console.log(data))

      }



    });
    console.log("**INSIDE post_toolbox EVENT**");

    const new_toolbox = document.getElementById("new_toolbox_name").value

    await fetch("/api/toolboxes", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({new_toolbox: new_toolbox}),
    })
    .then(response => response.json())
    .then(data => console.log(data))


    patch_toolbox.addEventListener("click", async (e) => {
      e.preventDefault();

      console.log("**INSIDE patch_toolbox EVENT**");

      await fetch("/api/toolboxes", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
      })
      .then(response => response.json())
      .then(data => console.log(data))


    });

    delete_toolbox.addEventListener("click", async (e) => {
      e.preventDefault();


      console.log("**INSIDE delete_toolbox EVENT**");
      if (e.target.classList.contains("toolbox_delete_button")) {
        const toolbox_id = e.target.value
        console.log(toolbox_id);
        await fetch("/api/toolboxes", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({toolbox_id: toolbox_id}),
        })
        .then(response => response.json())
        .then(data => console.log(data))

      }


    });

  });
