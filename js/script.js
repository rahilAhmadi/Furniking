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
            console.log(elem)
            elem.src='./img/star_4.svg';
        })
    }
});