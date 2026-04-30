function i18nStart(){
 
const language = navigator.language;
const elements = document.querySelectorAll(".i18n, [data-tooltip]");

if(language.startsWith('ja')) {
 elements.forEach((el) => {
    const text = el.textContent;
    if (text.includes("|")) {
      const parts = text.split("|");
      el.textContent = parts[1]; /* 前側の日本語を表示 */
    }
 // ツールチップ
 const tooltipText = el.getAttribute("data-tooltip"); //要素（el）の data-tooltip 属性の中身を読み取る
 if (tooltipText && tooltipText.includes("|")) { // data-tooltip が設定されているか？文字列の中に | が含まれているか？をチェック
  const parts = tooltipText.split("|");
  el.setAttribute("data-tooltip", parts[0]);
 }
  
  }); //elements.forEach((el)ここまで
 
}
else
{
  elements.forEach((el) => {
    const text = el.textContent;
    if (text.includes("|")) {
      const parts = text.split("|");
      el.textContent = parts[0]; /* 後ろ側の英語を表示 */
    }
    // ツールチップ
 const tooltipText = el.getAttribute("data-tooltip"); //要素（el）の data-tooltip 属性の中身を読み取る
 if (tooltipText && tooltipText.includes("|")) { // data-tooltip が設定されているか？文字列の中に | が含まれているか？をチェック
  const parts = tooltipText.split("|");
  el.setAttribute("data-tooltip", parts[1]);
 }
  }); //elements.forEach((el)ここまで
};
 
};
