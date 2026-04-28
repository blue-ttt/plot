// メニュー画面をフェッチ
fetch("https://blue-ttt.github.io/plot/program/navi.html")
.then(response=>response.text())
.then(data=>{
 document.getElementById("navi").innerHTML=data;
});

// フッターをフェッチ
fetch("https://blue-ttt.github.io/plot/program/footer.html")
.then(response=>response.text())
.then(data=>{
 document.getElementById("footer").innerHTML=data;
 i18nStart(); /* 翻訳 */
});
