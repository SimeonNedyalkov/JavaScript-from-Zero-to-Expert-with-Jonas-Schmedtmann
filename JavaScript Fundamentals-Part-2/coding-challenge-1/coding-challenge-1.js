// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so 
// one average score per team).
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B. 
// Apply this to the team's average scores �
// GOOD LUCK 

const calc_average_score = (score1,score2,score3) => {
    const total_score = (score1 + score2 + score3) / 3
    return total_score
}
// TEST DATA 1
dolphins_score1 = calc_average_score(44,23,71)
koalas_score1 = calc_average_score(65,54,49)
// TEST DATA 2
dolphins_score2 = calc_average_score(85,54,41)
koalas_score2 = calc_average_score(23,34,27)

function check_winner(dolphins_score, koalas_score) {
    if (dolphins_score > koalas_score) {
        console.log(`Dolphins win (${dolphins_score} vs ${koalas_score})`)
    } else {
        console.log(`Koalas win(${koalas_score} vs ${dolphins_score})`)
    }
}
console.log('Test Data 1:')
check_winner(dolphins_score1,koalas_score1)
console.log('Test Data 2:')
check_winner(dolphins_score2,koalas_score2)