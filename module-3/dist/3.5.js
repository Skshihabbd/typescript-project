"use strict";
{
    //Access Modifiers
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
    }
    class StudentsAccounts extends BankAccount {
        test() { }
    }
    const goribManuserAccount = new BankAccount(111, "mr. gorib", 28);
    //   goribManuserAccount.balance = 22;
    goribManuserAccount.addDeposite(2);
    console.log(goribManuserAccount.getBalance());
    //
    {
        //   if i use protected then i access the protected variable or data from paren to child class
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
        }
        // this is child class
        class StudentsAccounts extends BankAccount {
            test() {
                this._balance;
            }
        }
        const goribManuserAccount = new BankAccount(111, "mr. gorib", 28);
        //   goribManuserAccount.balance = 22;
        goribManuserAccount.addDeposite(2);
        console.log(goribManuserAccount.getBalance());
    }
    //
}