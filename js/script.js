let tools_item=document.querySelectorAll('.tools_ourProduct_item');
let img_tools_item=document.querySelector('.img_tools_item')
let starAndPrice=document.querySelectorAll('.starAndPrice');
let star_img=document.querySelectorAll('.star_diff');

if(tools_item[1].classList.contains('active')){
    img_tools_item.src='./img/active_icon_ourProduct.svg';
}

starAndPrice.forEach(element => {
    // console.log(element.classList.contains('star_4'))
    if(element.classList.contains('star_4')==true){
        star_img.forEach(elem=>{
            elem.src='./img/star_4.svg';
        })
    }
});

// menu
const open=document.querySelector('.menuopen');
const close=document.querySelector('.menuClose');
const layer=document.querySelector('.layer1');

open.onclick=()=>{
    layer.classList.add('check');
}

close.onclick=()=>{
    layer.classList.remove('check');
}