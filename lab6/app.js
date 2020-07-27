
// $(".child-div").resizable();
// alert('Hello, World!')
console.log('Hello, World!');
const buttonBigger = document.getElementById('decoration');
const textArea = document.querySelector('.story'); 
const bling = document.getElementById('bling');

function changeSize(){
    const style = getComputedStyle(textArea);
    let size = style.fontSize.split('p');
    size = parseInt(size[0]);
    size ++;    
    textArea.style.fontSize = `${size}px`;
};

function textStyle(){
    document.querySelector('.story').classList.toggle('showFont'); 
};

function interval(){
    i = setInterval(function(){
    changeSize();
   },500);   
}

window.onload = function main(){
    // buttonBigger.addEventListener('click', () => changeSize());
    buttonBigger.addEventListener('click', () => interval());
    document.querySelector('.btnTest').addEventListener('click',() =>{
        clearInterval(i);
    } )

    bling.addEventListener('change', e => {  
        if(e.target.checked){
            textStyle();
        }else{
            textStyle();
        }
    });
};
