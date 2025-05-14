const signs = ['+', '-', '*', '/'];

const number = document.querySelectorAll('.number');
let display = document.getElementById('display');

number.forEach((btn) => {
    btn.addEventListener('click', (el) => {
        let type = el.currentTarget.innerHTML;

        if(/[=]/.test(type)){
            extract_number(display.innerHTML);
        }else if(type == 'C'){
            display.innerHTML = "";
        }else{
            display.innerHTML = display.innerHTML + type;
        }
    });
});

function extract_number(str){
    for(let i = 0; i < str.length; i++){
        signs.forEach((el) => {
            if(str[i] === el){
                let sign = str[i];
                let num1 = str.slice(0, i);
                let num2 = str.slice(i+1);
                
                calculation(sign, num1, num2);
            }
        });
    }
}

function calculation(sign, num1, num2){
    let ans = null;
    if(sign === '+'){
        ans = parseInt(num1) + parseInt(num2);
    }else if(sign === '-'){
        ans = parseInt(num1) - parseInt(num2);
    }else if(sign === '*'){
        ans = parseInt(num1) * parseInt(num2);
    }else if(sign === '/'){
        ans = parseInt(num1) / parseInt(num2);
    }

    display.innerHTML = ans;
}