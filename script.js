document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector('body'),
        sidebar = body.querySelector('nav'),
        toggle = body.querySelector(".toggle"),
        searchBtn = body.querySelector(".search-box"),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text");

    const darkMode = localStorage.getItem('darkMode');

    if (darkMode === 'enabled') {
        body.classList.add('dark');
        modeText.innerText = "Light mode";
    } else {
        body.classList.remove('dark');
        modeText.innerText = "Dark mode";
    }

    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
    });

    searchBtn.addEventListener("click", () => {
        sidebar.classList.remove("close");
    });

    modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            localStorage.setItem('darkMode', 'enabled');
            modeText.innerText = "Light mode";
        } else {
            localStorage.setItem('darkMode', 'disabled');
            modeText.innerText = "Dark mode";
        }
    });

});


let accordion_btns  = document.querySelectorAll('.accordion_container .accordion .header'),
    accordion_bodys = document.querySelectorAll('.accordion_container .accordion .body');

if(accordion_btns && accordion_bodys)
{
    accordion_btns = Array.isArray(accordion_btns) ? accordion_btns : Object.values(accordion_btns);
    accordion_btns.forEach(accordion_btn=>{
        accordion_btn.addEventListener('click', function(){
            process_accordion(this);
        });
    });

    function process_accordion(x) {
        set_height_0();

        let next_sibling = x.nextElementSibling;
        if(next_sibling.offsetHeight>0)
        {
            next_sibling.style.height = '0px';
            x.closest('.accordion').classList.remove('active');
        } else {
            next_sibling.style.height = next_sibling.scrollHeight+30+'px';
            x.closest('.accordion').classList.add('active');
        }
    }

    function set_height_0() {
        accordion_bodys = Array.isArray(accordion_bodys) ? accordion_bodys : Object.values(accordion_bodys);
        accordion_bodys.forEach(accordion_body=>{
            accordion_body.style.height = '0px';
            accordion_body.closest('.accordion').classList.remove('active');
        });
    }
}

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  });
  document.onkeydown = function(event) {
if (event.keyCode == 123) {
return false;
}
if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
return false;
}
if (event.ctrlKey && event.shiftKey && event.keyCode == 75) {
return false;
}
};
document.onkeydown = function(event) {
if (event.keyCode == 123 || (event.ctrlKey && event.shiftKey && (event.keyCode == 73 || event.keyCode == 67))) {
return false;
}
};


$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  



//   

