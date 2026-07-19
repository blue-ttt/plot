// tooltipがマウスの場所＆適切な位置に表示できるように補助
function tooltip_position (){
    const desktopsizeY = window.innerHeight;
    console.log(desktopsizeY);
    const desktop_under_area = desktopsizeY - 60;
    console.log(desktop_under_area);

    window.addEventListener('mousemove', (now) => {
        // 座標を取得、代入
        const mouse_x = now.clientX;
        const mouse_y = now.clientY;
       // ::rootのcssカスタムプロパティを変更
        document.documentElement.style.setProperty('--mouse-x', mouse_x);
        document.documentElement.style.setProperty('--mouse-y', mouse_y);

        if (mouse_y > desktop_under_area){
            document.documentElement.style.setProperty('--UpOrUnder', '-15px')
        }
        else{
            document.documentElement.style.setProperty('--UpOrUnder', '45px')
        }
    });
}
tooltip_position();