const account = {
  balance: 100,
  accontName: "Yosub",
  getBalance: function () {
    parseInt(
      alert(
        ` Your Balance is : 
        ${account.balance}$ `
      )
    )
  },
  deposit: function () {
    var amount = parseInt(prompt(`Please enter the deposit amount`))
    if (isNaN(amount) || amount === " ") {
      account.AccounError()
      parseInt(prompt(`Please enter the deposit amount :`))
    }
    this.balance += amount
    alert(`the entered deposit amount is  $${amount}:
    Your Currenly balance is : ${this.balance}$`)
    alert(`deposit successfully entered!`)
  },
  withdrawal: function () {
    var amount = parseInt(prompt(`Please enter the deduction amount `))
    if (amount !== " " || amount !== null || inNAN(amount)) {
      if (this.balance < amount) {
        account.AccounError()
        parseInt(prompt(`Please enter the deduction amount `))
      }
      this.balance -= amount
      alert(`You successfully withdrew the cash is : ${amount}$, 
      and the remaining balance is : ${this.balance}$`)
    }
  },
  getAccountName: function () {
    alert(`Your Account Name is : ${this.accontName}`)
  },
  AccounError: function () {
    alert(`Error`)
  },
  exitAccount: function () {
    alert("End The Transaction")
  },
}

while (true) {
  var choice = prompt(`Please Choose 
    1.Show Balance
    2.Make a Deposit
    3.Make a Withdrawal
    4.Get Account Name
    5.Exit`)

  switch (parseInt(choice)) {
    case 1:
      account.getBalance()
      break

    case 2:
      account.deposit()
      // parseFloat(prompt("Please enter the deposit amount"))
      // account.deposit()
      // parseInt(alert("Your Current Balance is : " + account.balance))
      break

    case 3:
      account.withdrawal()

      break

    case 4:
      account.getAccountName()
      break

    case 5:
      account.exitAccount()
      break
    default:
      account.AccounError()
      break
  }
  if (choice == 5) {
    break
  }
}
