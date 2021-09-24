document.addEventListener("DOMContentLoaded", (e) => {
  const toolboxes_container = document.querySelector("#toolbox_list_container");

  toolboxes_container.addEventListener("click", async (e) => {
    e.preventDefault();

    if (e.target.classList.contains("toolbox_delete_button")) {

      const toolbox_id = e.target.value;


        await fetch("/api_toolboxes", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ toolbox_id: toolbox_id }),
        });

        const toolbox = document.getElementById(`toolbox_header_${toolbox_id}`);
        const toolbox_menu = document.getElementById(
          `toolbox_delete_${toolbox_id}`
        );

        toolbox.remove();
        toolbox_menu.remove();
    }
  });



});
