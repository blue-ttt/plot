fetch("header.html")
.then(response=>response.text())
.then(data=>{
 document.getElementById("header").innerHTML=data;
});

fetch("navi.html")
.then(response=>response.text())
.then(data=>{
 document.getElementById("navi").innerHTML=data;
});
