"use strict";
{
    //Encapsulation
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        addDeposite(amount) {
            this._balance = this._balance + amount;
            console.log(this._balance);
        }
        getBalance() {
            return this._balance;
        }
        getHiddenBalance() {
            return this.getBalance();
        }
    }
    class StudentsAccounts extends BankAccount {
        test() {
            return this.getHiddenBalance();
        }
    }
    const goribManuserAccount = new BankAccount(111, "mr. gorib", 28);
    //   goribManuserAccount.balance = 22;
    //   goribManuserAccount.addDeposite(2);
    //   console.log(goribManuserAccount.getBalance());
    const studentsAccounts = new StudentsAccounts(10, "shihab", 20);
    console.log(studentsAccounts.test());
    //
}
