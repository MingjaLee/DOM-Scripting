function showPic(whichpic) {
    var placeholder = document.getElementById("placeholder");
    if (!placeholder) {
        return false;
    }
    var source = whichpic.getAttribute("href");
    placeholder.setAttribute("src", source);

    var text = whichpic.getAttribute("title");
    if (text) {
        var description = document.getElementById("description");
        description.firstChild.nodeValue = text;
    }

    return true;
}

function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return !showPic(this)
        }
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof oldonload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

addLoadEvent(prepareGallery);