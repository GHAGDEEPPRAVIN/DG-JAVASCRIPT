// write a program to document.write() only even number using for loop, while loop, do...while loop

let x = prompt("Enter n : ");

let n = parseInt(x);

let i = 1;

document.write("For Loop <br>");

for(i=1; i<=n; i++)
{
	if(i%2==0)
	{
		document.write(i + " ");
	}
}

document.write("<br><br> while Loop <br>");

let a = 1;

while(a<=n)
{
	if(a%2==0)
	{
		document.write(a + " ");
	}

	a++;
}

document.write("<br><br> do...while Loop <br>");

let b = 1;

do
{
	if(b%2==0)
	{
		document.write(b + " ");
	}

	b++;

}while(b<=n);