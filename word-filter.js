let sentence1 = "hogy a macska rúgja meg, hát ezt hogy csináltam"

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