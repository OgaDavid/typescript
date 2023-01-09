// access modifiers are private, public and readonly

class Invoices {
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

// public means we can change and read values outside and inside of the class
// private means we can only read and change inside the class
// readonly mean we can only read it both inside and outside the class but not change it. 
