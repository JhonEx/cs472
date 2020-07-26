
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

function main(){
    buttonBigger.addEventListener('click', () => changeSize());
    bling.addEventListener('change', e => {  
        if(e.target.checked){
            textStyle();
        }else{
            textStyle();
        }
    });
};
main();