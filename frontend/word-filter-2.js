let sentenceA = "Keep the change you filthy animal"
let sentenceB = "Greed is a dog; falsehood is a filthy street-sweeper."
let sentenceC = "Filthy water cannot be washed."
let sentenceD = "Never use a big word when a little filthy one will do."
let sentenceE = "It's a filthy city. Everything here is trash. Eventually someone's gotta burn it."

function cleanse(sentence, words) {
    let result = ""
    let wordsFromSentence = sentence.split(" ")

    for (const wordFromSentence of wordsFromSentence) {
        let isCleanWord = true
        for (const word of words) {
            if (word === wordFromSentence) {
                isCleanWord = false
            }
        }
        
        if (isCleanWord === true) {
            result += `${wordFromSentence} `
        } else {
            let filteredWord = ""
            for (let i = 0; i < wordFromSentence.length; i++) {
                filteredWord += "*"
            }
            result += `${filteredWord} `
        }
    }
    return result
}

console.log( cleanse(sentenceA, ["filthy", "burn"]) );
console.log( cleanse(sentenceB, ["filthy", "burn"]) );
console.log( cleanse(sentenceC, ["filthy", "burn"]) );
console.log( cleanse(sentenceD, ["filthy", "burn"]) );
console.log( cleanse(sentenceE, ["filthy", "burn"]) );
