export class Invoices {
    private client: string;
    public details: string;
    readonly amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount  = a;
    }

    createInvoice() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}
