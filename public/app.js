import { Invoice } from "./models/Invoice.js";
import { Payment } from "./models/Payment.js";
import { ListTemplate } from "./models/ListTemplates.js";
const invOne = new Invoice("mario", "work on the mario website", 300);
let invoices = [];
invoices.push(invOne);
invoices.forEach((inv) => {
    console.log(inv.format());
});
const form = document.querySelector(".new-item-form");
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
//interfaces
// interface IsPerson {
// 	name: string;
// 	age: number;
// 	speak(a: string): void;
// 	spend(a: number): number;
// }
// const me: IsPerson = {
// 	name: "Amir",
// 	age: 30,
// 	speak(text: string): void {
// 		console.log(text);
// 	},
// 	spend(amount: number): number {
// 		console.log(`I spent ${amount}`);
// 		return amount;
// 	},
// };
// const greetPerson = (person: IsPerson) => {
// 	console.log(`hello ${person.name}`);
// };
// greetPerson(me);
// console.log(me);
