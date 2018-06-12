
togglenavclick = function()
{
    var nav = document.querySelector("nav");
    var toggler = document.querySelector(".navtoggle");

    if (nav.style.display == "none")
    {
        toggler.setAttribute("value", "/\\")
        nav.style.display = "flex";
    }
    else
    {
        toggler.setAttribute("value", "\\/")
        nav.style.display = "none";
    }
}