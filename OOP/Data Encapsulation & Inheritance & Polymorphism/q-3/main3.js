// create a class named student with private attributes roll_no,name,age,std and percentage, initialize
// all attributes by parameterized constructor(private attributes need to declare in global scope in class)
// and print all details for 3 students.

class student {

    // #roll_no;
    // #name;
    // #age;
    // #std;
    // #percentage;

    constructor(roll_no,name,age,std,percentage)
    {
        // this.#roll_no = roll_no;
        // this.#name = name;
        // this.#age = age;
        // this.#std = std;
        // this.#percentage = percentage;

        document.writeln(roll_no);
        document.writeln(name);
        document.writeln(age);
        document.writeln(std);
        document.writeln(percentage);
    }
}

const classes1 = new student(12 + "<br>","umesh" + "<br>",20 + "<br>","12th" + "<br>",100);
document.writeln("<br><br>");
const classes2 = new student(18 + "<br>","uvraj" + "<br>",19 + "<br>","12th" + "<br>",90);
document.writeln("<br><br>");
const classes3 = new student(46 + "<br>","pradeep" + "<br>",21 + "<br>","12th" + "<br>",80);