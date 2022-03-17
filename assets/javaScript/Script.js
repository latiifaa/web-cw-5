alert('لطيفه')
console.log(17)
console.log('%c بعد شهرين اكمل 18', 'color: red');
// Javascript is not Java

let budget = 20;
console.log(budget >= 30 && budget <= 80)

budget += 30
console.log(budget >= 30 && budget <= 80)



let grade = prompt(" enter your grade")
if (grade >=90) {
console.log ("لقد حصلت على امتياز 🥳");
}else if (grade >=80) {
console.log ("لقد حصلت على جيد جداً🤩");
}else if (grade >=70) {
console.log ("لقد حصلت على جيد🙂");
}else if (grade >=60) {
console.log ("لقد حصلت على مقبول😕");
}else if (grade >=50) {
console.log ("لقد حصلت على ضعيف☹️");
}else {
    console.log ("راسب💔");
}


switch(true) {
    case grade >=90:
    console.log ("لقد حصلت على امتياز 🥳");
    break;
    case grade >=80:
    console.log ("لقد حصلت على جيد جداً🤩");
    break;
    case grade >=70:
    console.log ("لقد حصلت على جيد🙂");
    break;
    case grade >=60:
    console.log ("لقد حصلت على مقبول😕");
    break;
    case grade >=50:
    console.log ("لقد حصلت على ضعيف☹️");
    break;
    default:
    console.log ("راسب💔");
}