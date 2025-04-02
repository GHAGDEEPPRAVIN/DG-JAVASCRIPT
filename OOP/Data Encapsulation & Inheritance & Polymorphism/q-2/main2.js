// wap to craete a class for animal with attribute like name,type,gender and age, make these all
// attribute private to secure direct access of the users, perform input and output for 3 defferent
// animals.

class animal {

    #name;
    #type;
    #gender;
    #age;

    input(name,type,gender,age)
    {
        this.#name = name;
        this.#type = type;
        this.#gender = gender;
        this.#age = age; 
    }

    ouput()
    {
        if(this.#name=="")
        {
            document.writeln("Gender of animal : ",this.#gender);
            document.writeln("<br>");
            document.writeln("Type of animal : ",this.#type);
            document.writeln("<br>");
            document.writeln("Age of animal : ",this.#age);
            document.writeln("<br>");
        }
        else
        {
            if(this.#type=="")
            {
                document.writeln("Name of animal : ",this.#name);
                document.writeln("<br>");
                document.writeln("Gender of animal : ",this.#gender);
                document.writeln("<br>");
                document.writeln("Age of animal : ",this.#age);
                document.writeln("<br>");
            }
            else
            {
                if(this.#gender=="")
                {
                    document.writeln("Name of animal : ",this.#name);
                    document.writeln("<br>");
                    document.writeln("Type of animal : ",this.#type);
                    document.writeln("<br>");
                    document.writeln("Age of animal : ",this.#age);
                    document.writeln("<br>");
                }
                else
                {
                    if(this.#age=="")
                    {
                        document.writeln("Name of animal : ",this.#name);
                        document.writeln("<br>");
                        document.writeln("Gender of animal : ",this.#gender);
                        document.writeln("<br>");
                        document.writeln("Type of animal : ",this.#type);
                        document.writeln("<br>");
                    }
                    else
                    {
                        document.writeln("Name of animal : ",this.#name);
                        document.writeln("<br>");
                        document.writeln("Gender of animal : ",this.#gender);
                        document.writeln("<br>");
                        document.writeln("Type of animal : ",this.#type);
                        document.writeln("<br>");
                        document.writeln("Age of animal : ",this.#age);
                        document.writeln("<br>");
                    }
                }
            }
        }
    }

}

const zoo1 = new animal();

zoo1.input("Elephant","Indian elephant","Male",38);
zoo1.ouput();
document.writeln("<br>");

const zoo2 = new animal();

zoo2.input("Peacock","Pavo cristatus","Female",15);
zoo2.ouput();
document.writeln("<br>");

const zoo3 = new animal();

zoo3.input("Lion","North Africa lion","male",58);
zoo3.ouput();
