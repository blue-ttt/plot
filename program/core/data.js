/*! * Create by blue-ttt 
* Project: plot 2026
*/
localStorage.setItem('recently_plot_style_type', 'ノート');

// --- 変数を設定 ---
let PlotStyleType = localStorage.getItem('recently_plot_style_type');
    console.log('plotのスタイルタイプは' + PlotStyleType);

let plot_edit_data_head = {
    info: 'This_data_is_the_work_of_a_Plot_user', type: PlotStyleType,
};
  // 見た目の部分
let plot_edit_data_body = [
    {
        id: '10036',
        x:  '500',
        y: '300',
        type: 'note',
        attrs: {
            color: '#FFF9E6',
            text_color: '#000',
            width: '100',
            height: '100',
            text: '',
        }
    },
    {
        id: '11036',
        x:  '200',
        y: '300',
        type: 'pin',
        attrs: {
            type: 'color',
            color: '#e6ffe9',
            width: '20',
            height: '20',
            text: '',
        }
    },
    {
        id: '13636',
        x:  '350',
        y: '220',
        type: 'textbox',
        attrs: {
            color: '#e6ffe9',
            text_color: '#000',
            width: '100',
            height: '100',
            text: 'hello',
        }
    }
];

if (!localStorage.getItem('save_plot_edit_data')) /* 初めてだったら保存 */ {
    localStorage.setItem('save_plot_edit_data', JSON.stringify(plot_edit_data_body));
} else /* 保存されていれば上書き */ {
    plot_edit_data_body = JSON.parse(localStorage.getItem('save_plot_edit_data'));
}


// canvasの幅と高さ
const canvasWidth = 3000;
const canvasHeight = 3000;
document.documentElement.style.setProperty('--canvas-width', canvasWidth);
document.documentElement.style.setProperty('--canvas-height', canvasHeight);
function scaleChange () {
    document.documentElement.style.setProperty('--canvas-scale', scale);
};

// --- 編集画面にて ---
let nowX = 0;
let nowY = 0;
let addXposition = 0;
let addYposition = 0;
let isResize = false;
let resize_startX = 0;
let resize_startY = 0;


function edit_update () {

    let saved_data_text = localStorage.getItem('save_plot_edit_data');/* ? */
    if (!saved_data_text) return;/* まだデータが保存されていない時にリターン(安全対策) */

    let upload_save_data_body = JSON.parse(saved_data_text);

    //キャンバスを空にする(重複しないように)
    canvas.innerHTML = '';
    
    upload_save_data_body.forEach(item => {

        console.log(`ID:${item.id}, type:${item.type}, X座標:${item.x}, Y座標:${item.y}, color:${item.attrs?.color}`);
        
        let input_material_html_data = ''; /* ifの前に変数を作っとく(if内だとinnerHTMLが見つけられないから) */
        
        // 付箋の部分
        if (item.type === 'note'){
            const noteWrapper = document.createElement('div');/* 文字列から実際のDOM要素（div）を作成するためのラッパーを作る(座標を変えるなどは文字だとできず、DOM要素にする必要があるから) */
            
            // 付箋のhtmlを上のに流し込む
            noteWrapper.innerHTML = `
                <div class="sticky-note element" id="${item.id}" style="background-color:${item.attrs?.color};" onclick="ElementSelect('${item.id}');" oncontextmenu="ElementSelect('${item.id}');">
                  <textarea placeholder="メモを入力..." maxlength="200" name="note" style="color:${item.attrs?.text_color}; width:${item.attrs.width}px; height:${item.attrs.height}px;" onchange="noteTextCange(this);">${item.attrs?.text}</textarea>
                 </div>
        `;
            const noteElement = noteWrapper.querySelector('.sticky-note');
            if(noteElement){
                noteElement.style.transform = `translate(${item.x}px,${item.y}px)`;
                canvas.appendChild(noteElement);/* #canvasに「追加」する(innerHTMLだと全て上書きしてしまうから) */
            }
        };
        // ピンの部分
        if (item.type === 'pin'){
            const pinWrapper = document.createElement('div');/* 文字列から実際のDOM要素（div）を作成するためのラッパーを作る(座標を変えるなどは文字だとできず、DOM要素にする必要があるから) */

            if (item.attrs?.type === 'color') {
            pinWrapper.innerHTML = `
                <div class="pin pin-color element" id="${item.id}" style="width:${item.attrs.width}px; height:${item.attrs.height}px; background-color:${item.attrs.color};" onclick="ElementSelect('${item.id}');" oncontextmenu="ElementSelect('${item.id}');">
                 </div>`
                } else if(item.attrs?.type === 'comment') {
            pinWrapper.innerHTML = `
                <div class="pin pin-cmt element" id="${item.id}" style="width:${item.attrs.width}px; height:${item.attrs.height}px;" onclick="ElementSelect('${item.id}');" oncontextmenu="ElementSelect('${item.id}');">
                  <div><icon>comment</icon></div>
                 </div>`
                }

            const pinElement = pinWrapper.querySelector('.pin');
            if(pinElement){ pinElement.style.transform = `translate(${item.x}px,${item.y}px)`; canvas.appendChild(pinElement); }
        };
        // テキストの部分
        if (item.type === 'textbox'){
            const textboxWrapper = document.createElement('div');/* 文字列から実際のDOM要素（div）を作成するためのラッパーを作る(座標を変えるなどは文字だとできず、DOM要素にする必要があるから) */

            textboxWrapper.innerHTML = `
                <div class="textbox element" id="${item.id}" contenteditable="true" style="width:${item.attrs.width}px;" onclick="ElementSelect('${item.id}');" oncontextmenu="ElementSelect('${item.id}');">
                  ${item.attrs?.text}
                 </div>`;

            const textboxElement = textboxWrapper.querySelector('.textbox');
            if (textboxElement){ textboxElement.style.transform = `translate(${item.x}px,${item.y}px)`; canvas.appendChild(textboxElement); }
        };

    });
};

 const selectArea_html = `
    <div class="selectArea">
        <div class="ContentsHeader">
            <button class="c-head-button c-head-act-edit engineer-tools" tooltip="要素を編集">編集</button>
            <button class="c-head-button c-head-act-comment" tooltip="コメント"><span class="material-symbols-outlined">comment</span></button>
            <button class="c-head-button c-head-act-delete" tooltip="削除" onclick="DeleteElement();"><span class="material-symbols-outlined">delete</span></button>
            <button class="c-head-button c-head-act-copys" tooltip="複製" onclick="Reproduction();"><span class="material-symbols-outlined">library_add</span></button>
            <button class="c-head-button c-head-act-more engineer-tools" tooltip="もっと表示" onclick="contentMenuDisplay();"><span class="material-symbols-outlined">more_horiz</span></button>
        </div>
        <div class="ElementOutline"></div>
        <button class="btn-drag"><span class="material-symbols-outlined">drag_pan</span></button>
        <div class="size-handle" style="bottom:0px; right:0px;"></div>
    </div>
    `;

function ElementSelect(id){
    console.log('【選択中】' + id);
    // 他の選択を消す
    const allSelect = document.querySelector('.selectArea');
    if (allSelect) {
        allSelect.remove();
    }

    let thisElementArray = plot_edit_data_body.find(item => item.id === id);
    if (thisElementArray) {
        nowX = Number(thisElementArray.x);
        nowY = Number(thisElementArray.y);
        color = thisElementArray.attrs.color;
        textColor = thisElementArray.attrs.text_color;
    }

    const selectElementHTML = document.getElementById(id);
    if (!selectElementHTML) { return; }
    selectElement = selectElementHTML;

    selectElementHTML.insertAdjacentHTML('beforeend', selectArea_html);
    // スタイルバー
    simpleStyleBar.style.display = 'flex';
    document.getElementById('simpleStyle_color').style.color = color;
    document.getElementById('TextColor').style.color = textColor;

    // ドラック移動
    const drug_btn = selectElement.querySelector(".btn-drag"); /* 移動のボタンを取得 */
    if (drug_btn) {
        drug_btn.addEventListener('mousedown', (e) => {
            isItDrug = true;
   
            /* マウスと要素の現在位置との差分(ズレ)を計算 */
            startX = e.clientX - nowX;
            startY = e.clientY - nowY;
        });
    }
};

// --- 移動処理 ---
    let isItDrug = false;
    let startX = 0;
    let startY = 0;

    window.addEventListener('mousemove', (e) => {
        if(!isItDrug || !selectElement) { return; }/* NOTドラック中or未選択なら拒否 */
        // ズレを修正
        nowX = e.clientX - startX;
        nowY = e.clientY - startY;

        // データ更新
        dataChange();
    });

    window.addEventListener('mouseup', () => {
        isItDrug = false;
        
    });
// ---移動処理ここまで

function ElementMove () {
    if (selectElement) { 
        let nowMove = false;

        if (pushKey.has("arrowright")) { nowX += 5; nowMove = true; } 
        if (pushKey.has("arrowleft"))  { nowX -= 5; nowMove = true; }
        if (pushKey.has("arrowup"))    { nowY -= 5; nowMove = true; }
        if (pushKey.has("arrowdown"))  { nowY += 5; nowMove = true; }

        if (nowMove) { dataChange(); }
    }

    requestAnimationFrame(ElementMove); };
ElementMove();


window.addEventListener('mousedown', (event) => {
    if (event.target.closest('.selectArea') || event.target.closest('.simple-style-bar') || event.target.closest('.element') || event.target.closest('.content-menu')) { return; } //これらが押されたら処理を離脱

    const allSelect = document.querySelector('.selectArea');
    if (allSelect && event.target.closest('.selectArea')) {
        return;
    }
    if (allSelect) { allSelect.remove(); simpleStyleBar.style.display = 'none'; selectElement = null; }
    
});

window.onload = function() {
    
edit_update();
}
// IDを作るとこ
function makeRandomID () {
    const random_id = String(Math.floor(Math.random()*90000) + 10000);
    return random_id;
};

function addElement_note (color) {
    const thisNewId = makeRandomID();
    newItem_position(100, 100);

    const newData = {
    id: thisNewId, x:  String(addXposition), y: String(addYposition), type: 'note', attrs: {color: color, text_color: '#000', width: 100, height: 100, text: '',}
    };
    addElement(newData);
};
function addElement_pin (type, param1) {
    const thisNewId = makeRandomID();
    newItem_position(100, 100);

    let newData = 0;
    switch (type) {

        case 'color':
            newData = {id: thisNewId, x:  String(addXposition), y: String(addYposition), type: 'pin', attrs: {color: param1, type: 'color', width:20, height:20,}};
            break;

        case 'comment':
            const new_commentID = addComment('with', thisNewId);
            newData = {id: thisNewId, x:  String(addXposition), y: String(addYposition), type: 'pin', attrs: {commentID: new_commentID, type: 'comment', width:20, height:20,}};
            break;
    };
    addElement(newData);
}
function addElement_textbox (type) {
    const thisNewId = makeRandomID();
    newItem_position(100, 50);
    
    const newData =  {id:thisNewId, x:String(addXposition), y:String(addYposition), type:'textbox', attrs:{width:100, height:50, type:type, text:'本文を編集', text_color:'#000', color:"none", font:'Sans-serif',}};
    addElement(newData);
};

function addElement (newData) {

    plot_edit_data_body.push(newData);
    savelocal();
    edit_update();
};
// 追加する要素のXY座標を計算
function newItem_position (newElementWidth, newElementHeight) {
    addXposition = -posX + (desktopsizeX / 2) / scale - newElementWidth / 2;
    addYposition = -posY + (desktopsizeY / 2) / scale - newElementHeight / 2;
};

// 削除プログラム
function DeleteElement () {
    if (!selectElement || !selectElement.id) { return; }
    let thisElementId = selectElement.id;
    plot_edit_data_body = plot_edit_data_body.filter(item => String(item.id) !== String(thisElementId));

    simpleStyleBar.style.display = 'none';
    selectElement = null;
    savelocal();
    edit_update();
};

// 複製プログラム
function Reproduction () {
    if (!selectElement || !selectElement.id) { return; }
    let thisElementId = selectElement.id;

    let thisElementArray = plot_edit_data_body.find(item => item.id === thisElementId);
    if (thisElementArray) {
        const thisNewId = makeRandomID();

            const copyThisElementArray = {
                ...JSON.parse(JSON.stringify(thisElementArray)), //ディープコピーしたデータのそのままの部分を入れる
                // 上書き部分
                id: String(thisNewId),//新しいid
                x: String(Number(thisElementArray.x) + 50), //現在のxより50px離れた位置
                y: String(Number(thisElementArray.y) + 50) //現在のyより50px離れた位置
            }

        plot_edit_data_body.push(copyThisElementArray);
        savelocal();
        edit_update();
        ElementSelect(copyThisElementArray.id);
    }
};
// コメント機能
function addComment (type, id) {

    if (type === 'canvas') {
        // コメント要素

    } else if(type === 'with') {
        // 要素に付くコメント
        const withElement = id;
        const thisNewId = makeRandomID();

        const newData = {id:thisNewId, x:'not', y:'not',  type:'comment',}
        return thisNewId;
    } else {
        console.log('コメントの作成に失敗しました'); return('error')
    }
};
// 付箋の文字が変わった時
function noteTextCange (textdata) {
    //親要素からidの取得と、変更した文を取得
    const noteElementdata = textdata.closest('.sticky-note');
    if (!noteElementdata || !noteElementdata.id) {return;}
    let thisElementId = noteElementdata.id;
    let changetext = textdata.value;

    let thisElementArray = plot_edit_data_body.find(item => item.id === thisElementId);
    if (thisElementArray && thisElementArray.attrs) {
        thisElementArray.attrs.text = changetext;
        console.log('データを変えたよ！ :' + changetext);
        savelocal();
    }
};

function dataChange () {
    if (!selectElement || !selectElement.id) return;/* 選択要素とそのidがあるかチェック */

    let thisElementId = selectElement.id; // 選択中の要素のidを取得
    selectElement.style.transform = `translate(${nowX}px,${nowY}px)`; //css更新

        // 配列データを更新
        let thisElementArray = plot_edit_data_body.find(item => item.id === thisElementId);
        if (thisElementArray) {
            thisElementArray.x = String(nowX);
            thisElementArray.y = String(nowY);
        }
        savelocal();
    };
function savelocal () { localStorage.setItem('save_plot_edit_data', JSON.stringify(plot_edit_data_body)); console.log('save') };