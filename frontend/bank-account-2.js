var accountOne = {
    "id": "24239874",
    "name": "ING",
    "balance": 1500,
    "transactions": [
        {   "amount": 8000,
            "isSuccessful": true,
            "type": "withdraw",
            "date": "2022-01-01"
        }
    ]
}

var accountTwo = {
    "id": "64239874",
    "name": "Bunq",
    "balance": 1000,
    "transactions": [
        {   "amount": 8000,
            "isSuccessful": true,
            "type": "deposit",
            "date": "2022-05-01"
        },
        {   "amount": 6000,
            "isSuccessful": true,
            "type": "deposit",
            "date": "2022-02-01"
        }
    ]
}

var accountThree = {
    "id": "84239874",
    "name": "Rabo Bank",
    "balance": 1200,
    "transactions": [
        {   "amount": 7000,
            "isSuccessful": true,
            "type": "deposit",
            "date": "2022-03-02"
        },
        {   "amount": 7000,
            "isSuccessful": true,
            "type": "withdrawal",
            "date": "2022-01-02"
        },
        {   "amount": 17000,
            "isSuccessful": true,
            "type": "deposit",
            "date": "2022-01-22"
        }
    ]
}

function getDateOfHighestDeposit(account) {
    // debugger
    let dateOfHighest = null;
    let amountOfHighest = 0;

    for (const transaction of account.transactions) {
       
        let isRelevant = transaction.type === "deposit" && transaction.isSuccessful;

        if (isRelevant && transaction.amount > amountOfHighest  ) {
            dateOfHighest = transaction.date
            amountOfHighest = transaction.amount
        }
    }
    return dateOfHighest
}

console.log(getDateOfHighestDeposit(accountOne));
console.log(getDateOfHighestDeposit(accountTwo));
console.log(getDateOfHighestDeposit(accountThree));
