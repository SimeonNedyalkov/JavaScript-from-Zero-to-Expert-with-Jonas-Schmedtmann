// BMI = mass / height ** 2
let mark_weight = 78
let mark_height = 1.69
let john_weight = 92
let john_height =1.95
let BMI_MARK = mark_weight / mark_height ** 2
let BMI_JOHN = john_weight / john_height ** 2
let markHigherBMI = BMI_MARK > BMI_JOHN
console.log('Mark Bmi: ', BMI_MARK) 
console.log('John BMI: ', BMI_JOHN)
console.log(markHigherBMI)