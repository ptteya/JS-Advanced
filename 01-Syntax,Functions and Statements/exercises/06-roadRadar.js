function roadRadar(currSpeed, area) {
    let speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    if (currSpeed > speedLimits[area]) {
        let difference = currSpeed - speedLimits[area];
        let status = "";
        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimits[area]} - ${status}`)
    } else {
        console.log(`Driving ${currSpeed} km/h in a ${speedLimits[area]} zone`);
    }
}

roadRadar(120, 'interstate');