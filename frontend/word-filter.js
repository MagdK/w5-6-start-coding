let sentence1 = "hogy a macska rúgja meg, hát ezt hogy csináltam"
let sentence2 = "Keep the change you filthy animal"
let sentence3 = "Greed is a dog; falsehood is a filthy street-sweeper."
let sentence4 = "Filthy water cannot be washed."
let sentence5 = "Never use a big word when a little filthy one will do."
let sentence6 = "It's a filthy city. Everything here is trash. Eventually someone's gotta burn it."

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
            let uglyWord = ""
            for (let i = 0; i < wordFromSentence.length; i++) {
                uglyWord += "*"
            }
            result += `${uglyWord} `
        }
    }
    return result
}

console.log( cleanse(sentence1, ["macska", "hát"]) );
console.log( cleanse(sentence2, ["filthy", "burn"]) );
console.log( cleanse(sentence3, ["filthy", "burn"]) );
console.log( cleanse(sentence4, ["filthy", "burn"]) );
console.log( cleanse(sentence5, ["filthy", "burn"]) );
console.log( cleanse(sentence6, ["filthy", "burn"]) );