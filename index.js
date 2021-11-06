const FUNCTIONS = {
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
    },
    calcGrade: (marks) => {
        const invalidMark = marks.find( (mark) => mark > 100 || mark < 0 );
        if (invalidMark) return `invalid mark entered: ${invalidMark}`;
        const avgMark = marks.reduce( (prev, curr) => prev + curr) / marks.length;
        if (avgMark >= 90) return 'A';
        if (avgMark >= 80) return 'B';
        if (avgMark >= 70) return 'C';
        if (avgMark >= 60) return 'D';
        return 'F';
    },
    showStars: (rows) => {
        for (let row = 1; row <= rows; row++) {
            let pattern = '';
            for (let stars = 1; stars <= row; stars++) 
                pattern += '*';
            console.log(pattern);
        }
    },
    printPrimes: (limit) => {
        const BITS_PER_NUMBER = 32;
        const bitVetor = FUNCTIONS.buildVector(limit / BITS_PER_NUMBER);

        // Sieve of Eratosthenes
        setNthBit(bitVector, 0);
        for (let i = 1; i <= limit; i++) {
            for(let j = i; j <= limit; j+= i) {
                FUNCTIONS.setNthBit(bitVector, j);
            }
        }

        printBitVector(bitVector);
    },
    printBitVector: (bitVector) => {
        for (let i = 0; i < bitVector.length; i++) {
            if(!bitVector[i]);
        }
    },
    buildVector: (bitCount) => {
        // Total bits each number stores
        const BITS_PER_NUMBER = 32;

        // Numbers needed to store bitCount
        const numberCount = Math.ceil(bitCount / BITS_PER_NUMBER);

        const vector = new Array(numberCount);

        for (let i = 0; i < numberCount; i++)
            vector[i] = 0;
        
        return vector;
    },
    // n is 0 index
    setNthBit: (bitVector, n) => {
        const BITS_PER_NUMBER = 32;
        const nthNumIndex = Math.floor(n / BITS_PER_NUMBER);
        n = n - nthNumIndex * BITS_PER_NUMBER;

        const mask = 1 << n;
        bitVector[nthNumIndex] |= mask;
    },
    getNthBit: (bitVector, n) => {
        
    }
}

let bitVector = FUNCTIONS.buildVector(33);
FUNCTIONS.setNthBit(bitVector, 63);
console.log(bitVector);