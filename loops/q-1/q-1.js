// write a program to document.write() 1 to n using for loop, while loop, do...while loop

let x = prompt("Enter n : ");

let n = parseInt(x);

let i = 1;

document.write("For Loop <br>");

for(i=1; i<=n; i++)
{
	document.write(i + " ");
}

document.write("<br><br> while Loop <br>");

let a = 1;

while(a<=n)
{
	document.write(a + " ");
	a++;
}

document.write("<br><br> do...while Loop <br>");

let b = 1;

do
{
	document.write(b + " ");
	b++;
}while(b<=n);