class SavingsAccount extends Account{
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    getInterest(){
        return this._interest;
    }

    setInterest(interest){
        this._interest = interest;
    }

    addInterest(){
        this.deposit(this.getBalance() * this._interest/100);
    }

    endOfMonth(){
        this.addInterest();
        return "Interest added Savings Account: " + this.getNumber() + " balance: " + this.getBalance() + " interest: " + this.getInterest();
    }

    toString(){
        return "Saving Account " + this._number + ": balance " + this.getBalance() + ", Interest " + this._interest;
    }
}