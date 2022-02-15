var bankAccountDutch = {
    "id": "24239874",
    "name": "ING NL",
    "balance": 123,
    "transactions": [
        {   "amount": 56,
            "isSuccessful": true,
            "type": "withdrawal",
            "date": "2022-01-01T23:28:56.782Z"
        }
    ]
}

var bankAccountHungarian = {
    "id": "64239874",
    "name": "K&H",
    "balance": 13000,
    "transactions": [
        {   "amount": 60000,
            "isSuccessful": false,
            "type": "deposit",
            "date": "2022-02-01T23:28:56.782Z"
        }
    ]
}

var bankAccountShared = {
    "id": "84239874",
    "name": "Rabo Bank",
    "balance": 1000,
    "transactions": [
        {   "amount": 1500,
            "isSuccessful": true,
            "type": "deposit",
            "date": "2022-02-02T23:28:56.782Z"
        }
    ]
}

function getDateOfHighestDeposit(account) {
    var datOfHighest = null;
    var amountOfHighest = 0;

    for (var transaction of array1) {
        console.log(element);
}