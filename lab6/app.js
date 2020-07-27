
// $(".child-div").resizable();
// alert('Hello, World!')

window.onload = function(){
 
    // "use strict";
    const buttonBigger = document.getElementById('decoration');
    const textArea = document.querySelector('.story'); 
    const bling = document.getElementById('bling');
    const igpay = document.getElementById('igpay-a');
    
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
    
    function igpayAtinlay(){
        let str = textArea.value;
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        let newStr = "";
    
        if (vowels.indexOf(str[0]) > -1) {
            newStr = str + "-yay";
            textArea.value = newStr;
        } else {
            let firstMatch = str.match(/[aeiou]/g) || 0;
            let vowel = str.indexOf(firstMatch[0]);
            newStr = str.substring(vowel) + '-'+str.substring(0, vowel) + "ay";
            textArea.value = newStr;
        }    
    };
    function main(){      
        // buttonBigger.addEventListener('click', () => changeSize());
        buttonBigger.addEventListener('click', () => interval());

        document.querySelector('.btnStop').addEventListener('click',() =>{        
            // clearInterval(setInterval(interval, 2000));          
            clearInterval(i)
        });
    
        bling.addEventListener('change', e => {  
            if(e.target.checked){
                textStyle();
            }else{
                textStyle();
            }
        });
    
        igpay.addEventListener('click', () => {
            console.log('hello');
            igpayAtinlay()
        });
    };
    main();
}


