import { compose } from "./utils/compose.utils.ts";
import { addProperty, AddPropFn } from "./utils/add-property.utils.ts";

const addName: AddPropFn = addProperty("name");
const addAge: AddPropFn = addProperty("age");
const addGender: AddPropFn = addProperty("gender");
const addCompany: AddPropFn = addProperty("company");
const addHobby: AddPropFn = addProperty("hobby");

const person1 = compose(
    addName("Kim"),
    addAge(26),
    addGender("female"),
    addCompany("InCube"),
    addHobby("running")
)({});

const person2 = compose(
    addName("Joe"),
    addAge(34),
    addGender("male"),
    addCompany("JRE")
)({});


console.log(person1);
console.log(person2);



