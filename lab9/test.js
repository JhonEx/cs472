describe('Get account number', function(){
    let account = new Account(1);
    it ("Retrieves the account number of the account", function(){
        assert.equal(1, account.getNumber());
    });
});

describe("Get balance", function(){
    let account = new Account(2);
    it("retrieves the current balance", function(){
        assert.equal(0.0, account.getBalance());
    });
});

describe("deposit in bank", function(){
    let account = new Account(3);
    account.deposit(100);
    it("The function changes upoon adding money to the account", function(){
        assert.equal(100, account.getBalance());
    });
});

describe ("withdraw from bank" , function(){
    let acc = new Account(4);
    acc.deposit(200);
    acc.withdraw(100);
    it("when withdraw is called it decreases from current balance", function(){
        assert.equal(100, acc.getBalance());
    });

    it("throws erro when negative withdraw", function(){
        assert.throw ( ()=> {acc.withdraw(-100)}, RangeError, "Withdraw amount has to be greater than zero");
    });
});

describe('toString', function(){
    let account = new Account(7);
    account.deposit(200);
    it("Account toString", function(){
        assert.equal("Account 7: balance 200", account.toString());
    });
});

describe("Savings Account tests", function(){
    let account = new SavingsAccount(8, 5);
    account.deposit(100);
    account.addInterest();

    it("adds the interest amount to the current balance.", function(){
        assert.equal(105, account.getBalance());
    });

    it("returns the toString representation of savings account ", function(){
        assert.equal("Saving Account 8: balance 105, Interest 5", account.toString());
    });
});

describe("Checking Account", function(){
    let account = new CheckingAccount(9, 100);
    account.deposit(200);

    it("throws eror when trying to withdraw amount that is greater than current balance plus overdraft.", function(){
        assert.throw(()=>{account.withdraw(1000)}, Error, "Insufficient funds.");
    });

    account.withdraw(300);
    it("can withdraw amount that is less than current balance + overdraft", function(){
        assert.equal(-100, account.getBalance());
    });
});


 // Bank class testing


 
describe("Bank Tests", function(){
    it("adds a new Account to the accounts array", function(){
        let bank = new Bank();
        bank.addAccount();
        assert.equal(1, bank.getAccounts().length);
        assert.equal(1, bank.getAccounts()[0].getNumber()); // account number starts from 1

        bank.addSavingsAccount(25);
        assert.equal(2, bank.getAccounts().length);

        bank.addCheckingAccount(100);
        assert.equal(3, bank.getAccounts().length);
    });

    it("deletes an account from account array when called closeAccount()", function(){
        let bank = new Bank();
        bank.addAccount();
        bank.addAccount();
        bank.addAccount();

        // bank.getAccounts().forEach(account => {
        //     console.log(account.getNumber());
        // });

        assert.equal(3, bank.getAccounts().length);
        assert.equal(2, bank.closeAccount(bank.getAccounts()[0].getNumber()));
        assert.equal(2, bank.getAccounts().length);
    });

    it("creates an account report of all accounts in new line. ", function(){
        let bank1 = new Bank();
        bank1.addAccount();
        bank1.addCheckingAccount(100);
        bank1.addSavingsAccount(200);

        assert.equal("Account 7: balance 0\nChecking Account 8: balance 0, Overdraft 100\nSaving Account 9: balance 0, Interest 200\n", bank1.accountReport());
    });
});



















