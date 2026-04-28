function i18nStart(){
 
window.addEventListener('DOMContentLoaded', () => { /* ページが完全に読み込んでから */
const language = navigator.language;
const elements = document.querySelectorAll(".i18n");

if(language.startsWith('ja')) {
 elements.forEach((el) => {
    const text = el.textContent;
    if (text.includes("|")) {
      const parts = text.split("|");
      el.textContent = parts[1]; // 前側の日本語を表示
    }
 })
}
else
{
  elements.forEach((el) => {
    const text = el.textContent;
    if (text.includes("|")) {
      const parts = text.split("|");
      el.textContent = parts[0]; // 後ろ側の英語を表示
    }
  });
};
 
});
};
