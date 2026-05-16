localStorage.setItem('recently_plot_style_type', 'ノート');

// 変数を設定
let PlotStyleType = localStorage.getItem('recently_plot_style_type');
    console.log('plotのスタイルタイプは' + PlotStyleType);

let plot_edit_data_head = {
    info: 'This_data_is_the_work_of_a_Plot_user', type: PlotStyleType,
};
  
let plot_edit_data_body = [

];
