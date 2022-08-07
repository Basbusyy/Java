function wordDetection(str){
   //  PART1. normalize
    let lowerstr = str.tolowerCase()
    // Part 2 . check
    lowerstr.includes('xxx') || lowerstr.includes('porn')||lowerstr.includes('sex')
    return isMatch
}
console.log(wordDetection("xxx"))
console.log(wordDetection("porn"))
console.log(wordDetection("sex"))

console.log(wordDetection("XXX"))
console.log(wordDetection("PORN"))
console.log(wordDetection("SEX"))

console.log(wordDetection("Xxx"))
console.log(wordDetection("Porn"))
console.log(wordDetection("Sex"))

console.log(wordDetection("x0x"))
console.log(wordDetection("p0rn"))
console.log(wordDetection("s3x"))