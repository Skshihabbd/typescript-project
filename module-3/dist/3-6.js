"use strict";
{
    //getter and setter
    {
        class BankAccount {
            constructor(id, name, balance) {
                this.id = id;
                this.name = name;
                this._balance = balance;
            }
            //   public addDeposite(amount: number) {
            //     this._balance = this._balance + amount;
            //     console.log(this._balance);
            //   }
            // using setter instead of a function that works same like a function method
            set diposite(amount) {
                this._balance = this._balance + amount;
            }
            //   public getBalance() {
            //     return this._balance;
            //   }
            // using getter instead of a function that works same like a function method
            get balance() {
                return this._balance;
            }
        }
        // this is child class
        // class StudentsAccounts extends BankAccount {
        //   test() {
        //     this._balance;
        //   }
        // }
        const goribManuserAccount = new BankAccount(111, "mr. gorib", 28);
        //   goribManuserAccount.balance = 22;
        // goribManuserAccount.addDeposite(2); //function call korte hobe
        // console.log(goribManuserAccount.getBalance()); //function call korte hobe
        // setter call like a property
        goribManuserAccount.diposite = 50;
        // call the function like a property
        const myBalance = goribManuserAccount.balance; //function use like a property
        console.log(myBalance);
    }
}
