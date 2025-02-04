// write a program to document.write() n to 1 using for loop, while loop, do...while loop

let x = prompt("Enter n : ");

let n = parseInt(x);

let i = n;

document.write("For Loop <br>");

for(i=n; i>=1; i--)
{
	document.write(i + " ");
}

document.write("<br><br> while Loop <br>");

let a = n;

while(a>=1)
{
	document.write(a + " ");
	a--;
}

document.write("<br><br> do...while Loop <br>");

let b = n;

do
{
	document.write(b + " ");
	b--;
}while(b>=1);