// for loops run condition first?

const PRACTICE_FUNCTIONS = {
    max: (a, b) => a > b ? a : b,
    isLandscape: (width, height) => width >= height, //never return true false UGLY
    FizzBuzz: (input) => {
        let output;
        typeof input === 'number' ? !(input % 3) && !(input % 5) ?
                output = 'FizzBuzz' : 
                !(input % 3) ? output = 'Fizz' :
                !(input % 5) ? output = 'Buzz' :
                output = input :
            output = NaN;
        return output;
    },
    checkSpeed: (speed) => {
        let output;
        const speedLimit = 70;
        const maxPoints = 12;
        const kmPerPoint = 5;

        speed < speedLimit + kmPerPoint ? output = 'ok' :
            output = Math.floor((speed - speedLimit) / kmPerPoint);
        if (typeof output === 'number') {
            if (output >= maxPoints) return 'License Suspended';
            return 'Point: ' + output;
        }
        return output;
    }
}


console.log(PRACTICE_FUNCTIONS.checkSpeed(129));