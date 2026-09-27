// メニュー画面をフェッチ
fetch("program/navi.html")
.then(response=>response.text())
.then(data=>{
 document.getElementById("navi").innerHTML=data;
});

// フッターをフェッチ
fetch("program/footer.html")
.then(response=>response.text())
.then(data=>{
 document.getElementById("footer").innerHTML=data;
});
