// 50 doors 

// let x = [];
// let y=1;
// let count=0;

// for(let i=0; i<=49; i++)
// {
//     x[i] = y;
//     y++;
// }




// // 1 to 5 tables

// let a = [];
// let b = 1;

// for(let i=0; i<=9; i++)
// {
//      a[i] = b;
//      b++;
// }
// b=2;
// for(let i=10; i<=19; i++)
// {
//     if(b%2==0)
//     {
//         a[i] = b;
//     }
//     b+=2;
// }
// b=3;
// for(let i=20; i<=29; i++)
// {
//     if(b%3==0)
//         {
//             a[i] = b;
//         }
//     b+=3;
// }
// b=4;
// for(let i=30; i<=39; i++)
// {
//     if(b%4==0)
//         {
//             a[i] = b;
//         }
//     b+=4;
// }
// b=5;
// for(let i=40; i<=49; i++)
// {
//     if(b%5==0)
//         {
//             a[i] = b;
//         }
//     b+=5;
// }

// // document.write(a);

// // for(let i=0; i<=49; i++)
// // {
// //     if(a[i]==1)
// //     {
// //         count++;
// //     }
// //     // if(x[i]%2==0 || x[i]%3==0 || x[i]%4==0 || x[i]%5==0)
// //     else if(a[i]%2==0 && a[i]%4==0 && a[i]%3==0 && a[i]%5==0)
// //     {
// //         count++;
// //     }
// //     else{
// //         // document.write("<br>")
// //     }
    
// // }




// for(let i=0; i<=49; i++)
// {
//     let three=0;

//     for(let j=0; j<=a.length; j++)
//     {
//         if(a[i] == a[j])
//         {
//             three++;
//         }
//     }

//     if(three%3==0)
//     {
//         count++;
//     }
        
// }

// document.write("The open doors are ",count);
// document.write("The closed doors are ",(50-count));


let doors = [];
let persons = [1, 2, 3, 4, 5];
let index = 0;
let close = 0;
let open = 0;
for (let i = 1; i <= 50; i++) {
  doors.push(0);
}

for (let i = 1; i <= 5; i++) {
  let table = [];
  for (let k = 1; k <= 10; k++) {
    table.push(i * k);
  }
  //   document.write(table + "<br>");
  table.forEach((e) => {
    if (doors[e - 1] == 0) {
      doors[e - 1] = 1;
    } else {
      doors[e - 1] = 0;
    }
  });
  table = [];
}

index = 0;
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    document.write(doors[index] + " ");
    index++;
  }
  document.write("<br>");
}

doors.forEach((e) => {
  if (e == 0) {
    close++;
  } else {
    open++;
  }
});

document.write("Open : " + open + "<br>");
document.write("Close : " + close);