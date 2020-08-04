class CheckingAccount extends Account{
    constructor(number, overdraft){
        super(number);
        this._overdraft = overdraft;
    }

    withdraw(amount){
        if(amount <= 0){
            throw  new RangeError("Withdraw amount has to be greater than zero.");
        }
        if(amount > this._balance + this._overdraft){
            throw Error("Insufficient funds.");
        }
        this._balance -= amount;
    }

    toString(){
        return "Checking Account " + this._number + ": balance " + this.getBalance() + ", Overdraft " + this._overdraft;
    }

    endOfMonth(){
        if(this.getBalance() < 0){
            return "Warning!, low balance CheckinAccount " + this.getNumber() + ": balance: " + this.getBalance() + " overdraft limit: " + this._overdraft;
        }
    }
}