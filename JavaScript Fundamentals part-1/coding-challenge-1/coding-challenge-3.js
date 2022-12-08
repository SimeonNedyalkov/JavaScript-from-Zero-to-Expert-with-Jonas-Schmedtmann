// Average score for each team
// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
let Dolphins_score1 = 96
let Dolphins_score2 = 99
let Dolphins_score3 = 89
let Koalas_score1 = 88
let Koalas_score2 = 91
let Koalas_score3 = 110
const Dolphins_total_score = (Dolphins_score1 + Dolphins_score2 + Dolphins_score3) / 3
const Koalas_total_score = (Koalas_score1 + Koalas_score2 + Koalas_score3) / 3
console.log(`Dolphins score : ${Dolphins_total_score}, Koalas score : ${Koalas_total_score}`)
if (Dolphins_total_score > Koalas_total_score && Dolphins_total_score > 100) {
    console.log('Dolphins win')
} else if (Koalas_total_score === Dolphins_total_score && Dolphins_total_score >= 100 && Koalas_total_score >= 100) {
    console.log('Its a draw')
}  else if (Dolphins_total_score < Koalas_total_score && Koalas_total_score > 100) {
    console.log('Koalas win')
} else {
    console.log('No one wins')
}
