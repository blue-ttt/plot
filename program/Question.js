function YesOrNo(title , text , yesName , noName){
  const html =  return`
  <div class="QuestionCade">
    <h2>${title}</h2>
    <p>${text}</p>
    <button>${yesName}</button>
    <button>${noName}</button>
  </div>
  `;
  const YesOrNo = document.getElementById('YesOrNo');/* <div id="YesOrNo"></div>に表示 */
}

function doDelete(){
  const html = return`
  <div class="QuestionCade">
    <h2>削除しますか？</h2>
    <h3>警告</h3>
    <p>これにより指定されたものは削除されます。取り消しは出来ません</p>
    <button>はい正気です</button>
    <button>キャンセル</button>
  </div>
  `;
}
