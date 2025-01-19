// JavaScript OOPs concept
class Student {
    constructor (roll, name){
        this.roll = roll;
        this.name = name;
    }

    study(){
       console.log("Study javascript"); 
    }
}

// object creation
st = new Student(101, "deep");
// accessing properties
console.log(st.roll);
console.log(st.name);
st.study();

// adding new property (state)
st.email = 'deep@kodnest.com'
console.log(st.email)
console.log(st)

// deleting property (state)
delete st.roll
console.log(st)

// accessing properties
console.log(st['name'])

// accessing all properties of an object using loop
for(key in st){
    console.log(st[key])
}