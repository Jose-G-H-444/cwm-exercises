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
    },
    stringProperties: (obj) => {
        const stringProperties = {};
        for (let key in obj) {
            if (typeof obj[key] === 'string') 
                stringProperties[key] = obj[key];
        }
        return stringProperties;
    },
    // (15) => 3 + 6 + 9 + +12 + 15 + 5 + 10 + 15 = 60
    // 3: 3, 6, 9, 12, 15
    // 5: 5, 10, 15
    sumOfMultiples: (limit) => {
        let sum = 0;

        for (let i = 0; i <= limit; i++)
            if (i % 3 === 0 || i % 5 === 0) 
                sum += i;
                
        return sum;
    },
    showNumbers: (limit) => {
        for (let i = 0; i <= limit; i++) {
            const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
            console.log(i, message);
        }
    },
    countTruthy: (array) => {
        let truthyCount = 0;
        for (let value of array) {
            if (value) truthyCount++;
        }
        return truthyCount;
    }
}
