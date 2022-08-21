let menuContainer;

window.addEventListener('click', () => {
        menuContainer.innerHTML = "";
    }) 

window.addEventListener('DOMContentLoaded', () => {
     menuContainer = document.querySelector("#search-menu-container");
     menuContainer.addEventListener("click", (e) => {
        e.stopPropagation();
        
     })
 
  })