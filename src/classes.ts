class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount  = a;
    }

    createInvoice() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const InvOne = new Invoice('David', 'worked on portfolio website', 250);