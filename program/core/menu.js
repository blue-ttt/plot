const ContMenuHtml = document.getElementById('contentMenu');

// -ボードメニューの表示-
  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();  /* デフォルトのメニューが出るのを防ぐ */

    const target = document.querySelector('.BoardMenu');

    if (event.target.closest('.element')) {
      contentMenuDisplay(); //コンテンツメニュー
    } else {
     // マウスの位置にメニューを表示させる
    target.style.left = `${event.clientX - 75}px`; /* 150pxの半分を引いて中央に */
    target.style.top = `${event.clientY - 75}px`;
    target.style.display = "flex";/* 表示 */
    }
 });
  // ボードメニューを非表示
  window.addEventListener('mousedown', (event) => {
    const target = document.querySelector('.BoardMenu');

    // もしクリックした場所がボードメニューの中身であれば、何もしない
    if (event.target.closest('.BoardMenu')) { return; }
    target.style.display = "none";
 });
  
  // -クイック追加メニューの表示-
  window.addEventListener('dblclick', (event) => {
    const target = document.querySelector('.QuickMenu');
    /* マウスの位置にメニューを表示させる */
    target.style.left = `${event.clientX - 75}px`; /* 150pxの半分を引いて中央に */
    target.style.top = `${event.clientY - 75}px`;
    target.style.display = "flex";
 });
  // クイック追加メニューを非表示
  window.addEventListener('mousedown', (event) => {
    const target = document.querySelector('.QuickMenu');
  
    // もしクリックした場所がクイックメニューの中身であれば、何もしない
    if (event.target.closest('.QuickMenu')) { return; }
    target.style.display = "none";
  });
  function QuickMenuNone() {
    document.querySelector('.QuickMenu').style.display = 'none';
  }
  // コンテンツメニュー
  function contentMenuDisplay () {
    ContMenuHtml.style.display = 'flex';
    ContMenuHtml.style.transform = `translate(${mouse_x}px, ${mouse_y}px)`;
  };
  function contentMenuNone () {
    ContMenuHtml.style.display = 'none';
  };
  window.addEventListener('mousedown', (event) => {
    if (event.target.closest('.content-menu')) {return;}
    document.getElementById('contentMenu').style.display = 'none';
  });
