function YesOrNo(title , text , yesName , noName){
  const html =  `
  <div class="QuestionCade">
    <h2>${title}</h2>
    <p>${text}</p>
    <button class="btn-QuestionDo">${yesName}</button>
    <button class="btn-QuestionCancel" onclick="OverlayIsNone(); const css = document.querySelector('.QuestionCade'); css.style.display = 'none';">${noName}</button>
  </div>
  `;
  const YesOrNoData = document.getElementById('QuestionYesOrNo');/* <div id="YesOrNo"></div>に表示 */
  YesOrNoData.innerHTML = html;
}
