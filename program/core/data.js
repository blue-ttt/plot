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
        x:  '0',
        y: '0',
        size: '1.0',
        type: 'note',
        attrs: {
            color: '#FFF9E6',
            text_color: '#000',
            width: '100px',
            height: '120px',
        }
    }
];

// --- 編集画面への反映 ---

function edit_update () {

    //キャンバスを空にする(重複しないように)
    canvas.innerHTML = '';
    
    plot_edit_data_body.forEach(item => {

        console.log(`ID:${item.id}, X座標:${item.x}, Y座標:${item.y},color:${item.attrs.color}`);
        
        let input_material_html_data = ''; /* ifの前に変数を作っとく(if内だとinnerHTMLが見つけられないから) */
        if (item.type === 'note'){
           input_material_html_data = `
             <div class="sticky-note" style="background-color:${item.attrs.color};">
                  <textarea placeholder="メモを入力..." maxlength="200" name="note" style="color:${item.attrs.text_color};"></textarea>
             </div>
        `;
        };

        const input_material_html = document.getElementById('canvas');
        input_material_html.innerHTML = input_material_html_data;
        
    });
};
window.onload = function() {
edit_update();
};
