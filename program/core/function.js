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
   const target = document.querySelector(".mini-study");
   target.style.display = "block";
   OverlayIsDisplay();
  };
  function StudyClose(){ /* ヘルプ閉じる */
   const target = document.querySelector(".mini-study");
   target.style.display = "none";
   OverlayIsNone();
  };
 function addMenuDisplay{
   const target = document.querySelector(".all-add-Menu");
   target.style.display = "block";
 }
 function addMenuClose{
   const target = document.querySelector(".all-add-Menu");
   target.style.display = "none";
 }
// --- オーバーレイの関数 ---
  function OverlayIsDisplay(){
   const target = document.querySelector(".overlay");
   target.style.display = "block";
  };
  function OverlayIsNone(){
   const target = document.querySelector(".overlay");
   target.style.display = "none";
  };
