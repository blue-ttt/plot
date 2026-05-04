function YesOrNo(title , text , yesName , noName){
  const html =  `
  <div class="QuestionCade">
    <h2>${title}</h2>
    <p>${text}</p>
    <button class="btn-QuestionDo">${yesName}</button>
    <button class="btn-QuestionCancel">${noName}</button>
  </div>
  `;
  targetElement.innerHTML = html;
  const YesOrNo = document.getElementById('QuestionYesOrNo');/* <div id="YesOrNo"></div>に表示 */
}
