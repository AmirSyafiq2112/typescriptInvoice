import { HasFormatter } from "../interfaces/HasFormatter.js";

//models
export class Invoice implements HasFormatter {
	constructor(
		private client: string,
		private details: string,
		private amount: number
	) {}

	format() {
		return `${this.client} owes RM${this.amount} for ${this.details}`;
	}
}
