// wap to create a class for employee with attributes like id ,name,salary and role, set all attributes
// and get for atleast 3 objects/employee.

class employee {

    #id;
    #name;
    #salary;
    #role;

    input(id,name,salary,role)
    {
        this.#id = id;
        this.#name = name;
        this.#salary = salary;
        this.#role = role;
    }

    outut()
    {
        if(this.#id=="")
        {
            document.writeln("employee name is : ",this.#name);
            document.writeln("<br>");
            document.writeln("employee salary is : ",this.#salary);
            document.writeln("<br>");
            document.writeln("employee role is : ",this.#role);
            document.writeln("<br>");
        }
        else
        {
            if(this.#name=="")
            {
                document.writeln("employee id is : ",this.#id);
                document.writeln("<br>");
                document.writeln("employee salary is : ",this.#salary);
                document.writeln("<br>");
                document.writeln("employee role is : ",this.#role);
                document.writeln("<br>");
            }
            else
            {
                if(this.#salary=="")
                {
                    document.writeln("employee id is : ",this.#id);
                    document.writeln("<br>");
                    document.writeln("employee name is : ",this.#name);
                    document.writeln("<br>");
                    document.writeln("employee role is : ",this.#role);
                    document.writeln("<br>");
                }
                else
                {

                    if(this.#role=="")
                    {
                        document.writeln("employee id is : ",this.#id);
                        document.writeln("<br>");
                        document.writeln("employee name is : ",this.#name);
                        document.writeln("<br>");
                        document.writeln("employee salary is : ",this.#salary);
                        document.writeln("<br>");
                    }
                    else
                    {
                        document.writeln("employee id is : ",this.#id);
                        document.writeln("<br>");
                        document.writeln("employee name is : ",this.#name);
                        document.writeln("<br>");
                        document.writeln("employee salary is : ",this.#salary);
                        document.writeln("<br>");
                        document.writeln("employee role is : ",this.#role);
                        document.writeln("<br>");
                    }
                }
            }
        }
    }

}

const company1 = new employee();
const company2 = new employee();
const company3 = new employee();


company1.input(1,"deep",50000,"fornt-end");
company1.outut();

document.writeln("<br>");

company2.input(2,"kunal",10000,"Helper");
company2.outut();

document.writeln("<br>");

company3.input(3,"Abilash",100000,"back-end");
company3.outut();

