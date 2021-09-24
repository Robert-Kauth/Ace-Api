document.addEventListener("DOMContentLoaded", (e) => {
    const post_toolbox = document.getElementById("post_toolbox_submit");
    const patch_toolbox = document.getElementById("patch_toolbox_submit");
    const delete_toolbox = document.getElementById("delete_toolbox_submit");
    // console.log(shelfSubmitButton);

    // event listener to add a shelf div
    //fetch shelves
    //create div with new shelf inisde it with create element
    //append new shelf to .new_shelf as child
    // make template for card of shelf
    //pass in variables to create card
    post_toolbox.addEventListener("click", async (e) => {
      e.preventDefault();

      console.log("**INSIDE post_toolbox EVENT**");

      const new_toolbox = document.getElementById("new_toolbox_name").value

      await fetch("/api/toolboxes", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({new_toolbox: new_toolbox}),
      })
      .then(response => response.json())
      .then(data => console.log(data))


    });

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

      await fetch("/api/toolboxes", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
      })
      .then(response => response.json())
      .then(data => console.log(data))


    });

  });
