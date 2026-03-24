fetch("header.html")
.then(response=>response.text())
.then(data=>{
 document.getElementById("header").innerHTML=data;
});

fetch("program/navi.html")
.then(response=>response.text())
.then(data=>{
 document.getElementById("navi").innerHTML=data;
});
