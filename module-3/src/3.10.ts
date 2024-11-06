{
  //Encapsulation
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    public addDeposite(amount: number) {
      this._balance = this._balance + amount;
      console.log(this._balance);
    }
    private getBalance() {
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
