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

// trend section filter

const indicatiorTrend=document.querySelector('.indicatorTrend').children;
const mainTrend=document.querySelector('.itemsTrend').children;


for(let i=0; i<indicatiorTrend.length;i++)
{
    indicatiorTrend[i].onclick=function(){
        for(let j=0;j<indicatiorTrend.length;j++){
            indicatiorTrend[j].classList.remove('active_grouping_trend_li')
        }
        this.classList.add('active_grouping_trend_li');
        const displayItem=this.getAttribute('data-fillter');
        for (let z=0;z<mainTrend.length;z++){
            mainTrend[z].style.transform='scale(0)';
            setTimeout(() => {
                mainTrend[z].style.display='none'
            }, 500);
            
            if(mainTrend[z].getAttribute('data-category')==displayItem || displayItem=='allTrend'){
                mainTrend[z].style.transform='scale(1)';
                setTimeout(() => {
                    mainTrend[z].style.display='block'
                }, 500);
            }
        }
    }
}
// our products filter

const indicatior=document.querySelector('.indicator').children;
const main=document.querySelector('.items').children;


for(let i=0; i<indicatior.length;i++)
{
    indicatior[i].onclick=function(){
        for(let j=0;j<indicatior.length;j++){
            indicatior[j].classList.remove('active_grouping_ourProduct_li')
        }
        this.classList.add('active_grouping_ourProduct_li');
        const displayItem=this.getAttribute('data-fillter');
        for (let z=0;z<main.length;z++){
            main[z].style.transform='scale(0)';
            setTimeout(() => {
                main[z].style.display='none'
            }, 500);
            
            if(main[z].getAttribute('data-category')==displayItem || displayItem=='all'){
                main[z].style.transform='scale(1)';
                setTimeout(() => {
                    main[z].style.display='block'
                }, 500);
            }
        }
    }
}

// add to card
const shopping_button=document.querySelector('.card_notif');
const shoppingNotif=document.querySelector('.icons');
const addtocard=document.querySelectorAll('.tools_trend_add');
const select=document.querySelector('.select');



addtocard.forEach(button => {
    button.addEventListener('click',function(e){
        const add =Number(shoppingNotif.getAttribute('data-count')||0);
        shoppingNotif.setAttribute('data-count',add+1);
        shoppingNotif.classList.add('zero');
        


        
        let tool=e.target.parentNode;
        let parent=tool.parentNode;
        let clone=parent.cloneNode(true);
        console.log(parent,clone)
        select.appendChild(clone);

        if(clone){
            shoppingNotif.addEventListener('click',()=>{
                select.classList.toggle('display');

            })
        }
    })
});

