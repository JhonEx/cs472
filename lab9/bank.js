"use strict";

class Bank {
    constructor(){
        this._accounts = [];
    }

    getAccounts(){
        return this._accounts;
    }

    addAccount(){
        let acc = new Account(Bank.nextAccountNumber);
        this._accounts.push(acc);
        Bank.nextAccountNumber++;
        return acc.getNumber();
    }

    addSavingsAccount(interest){
        let acc = new SavingsAccount(Bank.nextAccountNumber, interest);
        this._accounts.push(acc);
        Bank.nextAccountNumber++;
        return acc.getNumber();
    }

    addCheckingAccount(overdraft){
        let acc = new CheckingAccount(Bank.nextAccountNumber, overdraft);
        this._accounts.push(acc);
        Bank.nextAccountNumber++;
        return acc.getNumber();
    }

    closeAccount(number){
        this._accounts =  this._accounts.filter(acc => acc.getNumber() !== number);
        return this._accounts.length;
    }

    accountReport()
    {
        return this._accounts.map(acc => acc.toString())
            .reduce((accum, currentStr) => accum + currentStr + "\n", "");
    }
    endOfMonth(){
        return  this._accounts.map(acc => acc.endOfMonth())
            .reduce((accum,currentStr) => accum + currentStr + "\n", "");
    }

}
Bank.nextAccountNumber = 1;