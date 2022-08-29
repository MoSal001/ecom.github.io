let menuToggle = document.querySelector('.toggle');
let navogation = document.querySelector('.navigation')
menuToggle.onclick = function ()
{
    menuToggle.classList.toggle('active');
    navogation.classList.toggle('active');
  
}



// добавить активный класс в выбранный элемент списка
let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++)
{
    list[i].onclick = function()
    {
        let j = 0;
        while(j < list.length){
            list[j++].className = 'List';
    }
    list[i].className = 'List active';
    }
}

//Theme Change
function myThemeSelection() {
    var element = document.body;
    element.classList.toggle("light-mode");

    

    // var x = document.getElementById("theme_select");
    // if (x.innerHTML === "Dark") {
    //   x.innerHTML = "Light";
    // //   x.classList.toggle = "bi-moon-stars-fill";
      

    // } else {
    //   x.innerHTML = "Dark";
    // //   x.classList.toggle = "bi-moon-stars-fill";
      

    // }

 }

 

