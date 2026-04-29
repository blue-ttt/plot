/* -ボードメニューの表示- */
  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();  /* デフォルトのメニューが出るのを防ぐ */
    const target = document.querySelector('.BoardMenu');
   /* マウスの位置にメニューを表示させる */
    target.style.left = `${event.clientX - 75}px`; /* 150pxの半分を引いて中央に */
    target.style.top = `${event.clientY - 75}px`;
   
    target.style.display = "block";/* 表示 */
 });
  /* コンテキストメニューを非表示 */
  window.addEventListener('mousedown', (event) => {
    const target = document.querySelector('.BoardMenu');
    target.style.display = "none";
 });
  
  /* -クイック追加メニューの表示- */
  window.addEventListener('dblclick', (event) => {
    const target = document.querySelector('.QuickMenu');
    /* マウスの位置にメニューを表示させる */
    target.style.left = `${event.clientX - 75}px`; /* 150pxの半分を引いて中央に */
    target.style.top = `${event.clientY - 75}px`;
    target.style.display = "flex";
 });
  /* クイック追加メニューを非表示 */
  window.addEventListener('mousedown', (event) => {
    const target = document.querySelector('.QuickMenu');
  
    // もしクリックした場所がクイックメニューの中身であれば、何もしない
    if (event.target.closest('.QuickMenu')) {
    return; // ここで処理を終了（＝非表示にしない）
     }
    target.style.display = "none";
  });
