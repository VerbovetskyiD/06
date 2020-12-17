//задание 1

let cylinder = {
    radius: 6,
    height: 12,

    getVolume: function() {
        return Math.PI * (this.radius ** 2) * this.height;
    },

    getArea: function() {
        return 2 * Math.PI * this.radius * (this.height + this.radius);
    }
}
//проверка:
console.log( cylinder.getVolume() );
console.log( cylinder.getArea() );

//задание 2

function getResult(firstNum, secondNum, operator) {
    let result;
    switch (operator) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            result = firstNum / secondNum;
            break;
        case '%':
            result = firstNum % secondNum;
            break;
        case '**':
            result = firstNum ** secondNum;
            break;
    }
    return isFinite(result) ? result : false;
}

console.log( getResult(12, 6, '/') ); //проверка

//задание 3

function isCharPresent(str, char) {
    let result = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            result = true;
            break;
        }
    }
    return result;
}

console.log( isCharPresent('str', 'r') ); //проверка

//задание 4

function charIndexOf(str, char) {
    let result = -1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            result = i;
            break;
        }
    }
    return result;
}

console.log( charIndexOf('str', 'r') ); //проверка