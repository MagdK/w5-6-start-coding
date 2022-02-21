var bankAccountOne = {
    "id": "24239874",
    "name": "ING",
    "balance": 123,
    "transactions": [
        {   "amount": 8000,
            "isSuccessful": true,
            "type": "deposit",
            "date": "2022-01-01"
        }
    ]
}

var bankAccountTwo = {
    "id": "64239874",
    "name": "K&H",
    "balance": 1000,
    "transactions": [
        {   "amount": 6000,
            "isSuccessful": true,
            "type": "deposit",
            "date": "2022-02-01"
        }
    ]
}

var bankAccountThree = {
    "id": "84239874",
    "name": "Rabo Bank",
    "balance": 1000,
    "transactions": [
        {   "amount": 7000,
            "isSuccessful": true,
            "type": "deposit",
            "date": "2022-02-02"
        }
    ]
}

function getDateOfHighestDeposit(account) {

    let amountOfHighest = 0;
    let getDateOfHighest = null;

    for (const transaction of account.transactions) {
        let isRelevant = false;

        if (transaction.type === "deposit" && transaction.isSuccessful === true) {
            isRelevant = true
        }

        if ( isRelevant == true && transaction.amount > amountOfHighest )
            amountOfHighest = transaction.amount
            getDateOfHighest = transaction.date
    }
    return getDateOfHighest
}

console.log( getDateOfHighestDeposit(bankAccountOne) );
console.log( getDateOfHighestDeposit(bankAccountTwo) );
console.log( getDateOfHighestDeposit(bankAccountThree) );