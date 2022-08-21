let menuContainer;

window.addEventListener('click', () => {
        menuContainer.innerHTML = "";
    }) 

window.addEventListener('DOMContentLoaded', () => {
     menuContainer = document.querySelector("#search-menu-container");
     menuContainer.addEventListener("click", (e) => {
        e.stopPropagation();        
     });

     let searchInput = document.querySelector("#search-input");
     let ref;
     searchInput.addEventListener("input", (e) => {});
     const value = e.target.value;
     if(ref) {
       clearTimeout(ref);        
     }

     ref = setTimeout(() => {
        console.log(value);
     }, 2000);
 
  })