// --- ボタンの関数 ---
  function ShareDisplay(){ /* 共有 */
   const target = document.querySelector('.share');
   target.style.display = "block";
  };
  function ShareClose(){ /* 共有閉じる */
   const target = document.querySelector('.share');
   target.style.display = "none";
  };
  function SettingDisplay(){ /* 設定 */
   const target = document.querySelector('.mini-setting');
   target.style.display = "block";
   OverlayIsDisplay();
  };
  function SettingClose(){ /* 設定閉じる */
   const target = document.querySelector('.mini-setting');
   target.style.display = "none";
   OverlayIsNone();
  };
  function HelpDisplay(){ /* ヘルプ */
   const target = document.querySelector(".help");
   target.style.display = "block";
   OverlayIsDisplay();
  };
  function HelpClose(){ /* ヘルプ閉じる */
   const target = document.querySelector(".help");
   target.style.display = "none";
   OverlayIsNone();
  };
 function addMenuDisplay(){ /* 要素追加画面 */
   const target = document.querySelector(".add-all-menu");
   target.style.display = "block";
   OverlayIsDisplay();
 };
 function addMenuClose(){ /* 要素追加画面閉じる */
   const target = document.querySelector(".add-all-menu");
   target.style.display = "none";
   OverlayIsNone();
 };
// --- オーバーレイの関数 ---
  function OverlayIsDisplay(){
   const target = document.querySelector(".overlay");
   target.style.display = "block";
  };
  function OverlayIsNone(){
   const target = document.querySelector(".overlay");
   target.style.display = "none";
  };
  // --- ループ ---
  function LoopFunction(){

  // --- モードバーのscale ---
  const modeboardHTML = document.querySelector('.mode-board');
  if (scale > 1.0 ) {
    modeboardHTML.style.transform = 'scale(0.9)';
  }else{
    modeboardHTML.style.transform = 'scale(1.0)';
  }
  requestAnimationFrame(LoopFunction);
};
LoopFunction();

// --- メニュータブ画面 ---
const menuHTMLdata_plotSetting = `<details class="thisPlotSetting tab">
<summary>このプロットの設定</summary>
<div class="screen">
<b>タイトル</b><input type="text" class="inputText">
<b>タイプ</b><select><option>とりあえず自由！(ベーシック)</option><option>ノート(まとめ、記録)</option><option>ホワイトボード(アイデア記入)</option><option>掲示板(意見広げ、現状を可視化)</option><option>超思考ボード</option></select>

</div></details>`;
const menuHTMLdata_elementSetting_text = `<details class="thisTextElementSetting tab">
  <summary>要素</summary>
  <div class="screen">
  <details><summary>テキスト</summary><div class="screen"><textarea placeholder="文章を入力..."></textarea></div>
  </details>
  </div>
</details>`;

// --- くみたての固定メニュー ---
let inputHTMLdata = "home";
const mainScreen_area = document.getElementById('EngMenu_MainScreen');

  function Newtab (link) {
    switch (link) {
      case "document/setting": inputHTMLdata = menuHTMLdata_plotSetting;
      break;
      case "window/branch": 
      break;
      case "Element/text/setting": inputHTMLdata = menuHTMLdata_elementSetting_text;
      break;
    }
  
    mainScreen_area.innerHTML = inputHTMLdata;
  };
  Newtab('document/setting');
