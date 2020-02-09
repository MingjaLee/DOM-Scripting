function displayAbbreviations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    // get all the abbreviations
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) return false;

    // loop abbreviations to get key-value
    var defs = new Array();
    for (var i = 0; i < abbreviations.length; i++) {
        var curr_abbr = abbreviations[i];
        if (curr_abbr.childNodes.length < 1) continue;
        var definition = curr_abbr.getAttribute("title");
        var key = curr_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }

    // create the def list
    var dlist = document.createElement("dl");
    for (key in defs) {
        var definition = defs[key];
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);

        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }

    if (dlist.childNodes.length < 1) return false;
    // create a headline
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    // add the headline to the body
    document.body.appendChild(header);
    // add the definition list to the body
    document.body.appendChild(dlist);

}

addLoadEvent(displayAbbreviations);
