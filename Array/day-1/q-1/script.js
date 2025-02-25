// x = [1,3,2,4,67,5,83]
// wap to print only even no 

let x = [1,3,2,4,67,5,83];

document.write("The array is ",x);
document.write("<br> Output : <br>");

for(let i=0; i<=x.length; i++)
{
    if(x[i]%2==0)
    {
        document.write(x[i] + "<br>");
    }
}