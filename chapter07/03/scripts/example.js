window.onload = function () {
    var para = document.createElement("p");
    var txt = document.createTextNode("Hello World!");
    para.appendChild(txt);
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
}