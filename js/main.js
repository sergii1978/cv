var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "theme/pro-light-theme/light-style.css";
    let darkTheme = "theme/pro-dark-theme/dark-style.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == darkTheme)
    {
   	 currTheme = lightTheme;
   	 theme = "light";
    }
    else
    {    
   	 currTheme = darkTheme;
   	 theme = "dark";
    }

    link.setAttribute("href", currTheme);

    Save(theme);
}