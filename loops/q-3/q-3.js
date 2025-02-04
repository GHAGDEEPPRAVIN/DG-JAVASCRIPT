// write a program to document.write() only odd number using for loop, while loop, do...while loop

let x = prompt("Enter n : ");

let n = parseInt(x);

let i = 1;

document.write("For Loop <br>");

for(i=1; i<=n; i+=2)
{
	document.write(i + " ");
}

document.write("<br><br> while Loop <br>");

let a = 1;

while(a<=n)
{
	document.write(a + " ");
	a+=2;
}

document.write("<br><br> do...while Loop <br>");

let b = 1;

do
{
	document.write(b + " ");
	b+=2;
}while(b<=n);