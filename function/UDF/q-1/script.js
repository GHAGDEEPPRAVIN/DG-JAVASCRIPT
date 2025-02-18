//  wap to create calculator using udf & switch case.

function add(num1,num2)
{
    document.write(num1 + " + " + num2 + " = " + (num1+num2));
    document.write("<br>");
}
function sub(num1,num2)
{
    document.write(num1 + " - " + num2 + " = " + (num1-num2));
    document.write("<br>");
}
function mul(num1,num2)
{
    document.write(num1 + " x " + num2 + " = " + (num1*num2));
    document.write("<br>");
}
function div(num1,num2)
{
    document.write(num1 + " / " + num2 + " = " + (num1/num2));
    document.write("<br>");
}

    let x = prompt("Enter num1 : ");
    let y = prompt("Enter num2 : ");
    let choise = prompt("Enter your choise : ");


    let num1 = parseInt(x);
    let num2 = parseInt(y);

    switch(choise)
    {
        case "+" : add(num1,num2);
        break;

        case "-" : sub(num1,num2);
        break;

        case "/" : div(num1,num2);
        break;

        case "*" : mul(num1,num2);
        break;

        default : document.write("Enter valid choise form + , - , * , /");
    }