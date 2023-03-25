export class Invoices {
    private client: string;
    public details: string;
    readonly amount: number;

    constructor(a: string, b: string, c: number) {
        this.client = a;
        this.details = b;
        this.amount  = c;
    }

    createInvoice() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}
