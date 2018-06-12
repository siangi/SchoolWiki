
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

setCommentBoxesHeight = function()
{
    var articleNodes = document.querySelectorAll("article");
    var i;

    for (i = 0; i < articleNodes.length; i++){
        var textHeight = articleNodes[i].querySelector(".textWrapper").clientHeight;
        articleNodes[i].querySelector(".commentWrapper").style.maxHeight = textHeight + "px";
        articleNodes[i].querySelector(".commentWrapper").style.height = textHeight + "px";
        console.log("max Height " + articleNodes[i].querySelector(".commentWrapper").style.maxHeight);
    }
    
}