speedDetector()

function speedDetector(){
    let speed = prompt("Enter the speed of the car (in km/h): ");
    speed = parseInt(speed);

    if (speed >= 0 && speed < 70){
        console.log("Ok")
    }
    else {
        // This done below is the input speed for that speed above 70km/h
        let demeritPoints = Math.floor((speed -70) / 5);

        if (demeritPoints > 12){
            console.log("License Suspended")
        }
        else {
        console.log('You have ${demeritPoints} demerit points');
        }
    }
}
