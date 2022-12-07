let mark_weight = 78
let mark_height = 1.69
let john_weight = 92
let john_height =1.95
let BMI_MARK = mark_weight / mark_height ** 2
let BMI_JOHN = john_weight / john_height ** 2
let markHigherBMI = BMI_MARK > BMI_JOHN
if (markHigherBMI) {
    console.log("Mark's BMI ${BMI_MARK} is higher than John's BMI ${BMI_JOHN}!")
} else {
    console.log("John's BMI ${BMI_MARK} is higher than Marks's BMI ${BMI_JOHN}!")
}
