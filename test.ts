// const car = (obj: object) => {
// 	console.log(obj);
// };

// let firstCar = car({
// 	model: "axia",
// 	brand: "perodua",
// });

// console.log(firstCar);
// let obj: {
// 	name: string;
// 	age: number;
// };

////*****IMPORTANT*****////
// const addProperty = (obj: object, val: string) => {
// 	// prop = val;
// 	return { ...obj, val };
// };

// let obj = addProperty({ name: "Amir", age: 23 }, "test");
// console.log(obj);

//generics
// const car = <T extends { model: string }>(obj: T) => {
// 	let uid: number = 23;
// 	return { ...obj, uid, skill: "ntah" };
// };

// let firstCar = car({
// 	model: "axia",
// 	brand: "perodua",
// })!;

// console.log(firstCar.skill);

//generic with interface

// interface Resource {
// 	uid: number;
// 	resourceName: string;
// 	data: any;
// }

// const docExample: Resource = {
// 	uid: 1,
// 	resourceName: "Person",
// 	data: "Amir",
// };

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
