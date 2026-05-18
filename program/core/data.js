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
    plot_edit_data_body.forEach(item => {

        console.log(item.id);
        console.log(item.x);
        console.log(item.y);
        console.log(item.type);
        console.log(item.attrs.color);
        
        let input_material_html_data = ''; /* ifの前に変数を作っとく(if内だとinnerHTMLが見つけられないから) */
        if (item.type === 'note'){
           input_material_html_data = `
             <div class="sticky-note">
                  <textarea placeholder="メモを入力..." maxlength="200"></textarea>
             </div>
        `;
            const styleCss docment.querySelector('.sticky-note');
            styleCss.style.background-color = item.attrs.color;
        };

        const input_material_html = document.getElementById('plot_body');
        input_material_html.innerHTML = input_material_html_data;
        
    });
};
window.onload = function() {
edit_update();
};
