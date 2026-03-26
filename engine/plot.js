class MyPlot extends HTMLElement{
// 1. タグが画面に現れた瞬間に実行される関数
connectedCallback() {
// 少し待ってから実行（中身のタグを読み取るため）
setTimeout(() => this.render(), 1);

}


  
}
