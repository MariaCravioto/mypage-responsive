var button = document.getElementById('icon'); //Call the html element btn and save it in the variable

function showMenu() { //function to show the menu
  var menu = document.getElementById("opcs-menu");

  if(menu.classList.contains("disabled-menu")){
    //console.log("mostrar");
    menu.classList.remove("disabled-menu"); // remove the disable class
      menu.classList.add("enabled-menu"); //add class enabled
  }
  else{ //hide the menu
  //  console.log("ocultar");
      menu.classList.remove("enabled-menu");
      menu.classList.add("disabled-menu");
  }
}

button.addEventListener("click", showMenu); //add the event click to the button to show the menu
