studentGradeGeneraor()

function studentGradeGeneraor(){
    let mark = prompt("Enter your marks (between 0 and 100): ");
        if (mark >= 80 && mark < 100){
            console.log("A")
        }
        else if (mark >=60 && mark < 80){
            console.log("B")
        }
        else if (mark >=59 && mark <= 49){
            console.log("C")
        }
        else if (mark >= 40 && mark <= 49){
            console.log("D")
        }
        else if (mark > 0 && mark < 40){
            console.log("E")
        }
        else {
            console.log("Invalid")
        }
    }
