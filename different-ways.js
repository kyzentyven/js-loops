// Odd Numbers
for(let i = 0; i <20; i++){
    if(i % 2 === 1){
        console.log(i);
    }
}

for(let i = 0; i <20; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

for(let i = 1; i <20; i+=2){
        console.log(i);
}

// List of numbers between 1 to 30 that are divisible by 5
for(let i = 1; i <= 30; i++){
    if( i % 5 === 0){
        console.log(i);
    }
}

// List of numbers between 1 to 30 that are divisible by 3
for(let i = 1; i <= 30; i++){
    if( i % 3 === 0){
        console.log(i);
    }
}

// List of numbers between 1 to 30 that are divisible by 3 or 5
for(let i = 1; i <= 30; i++){
    if( i % 3 === 0 || i % 5 === 0){
        console.log(i);
    }
}

// List of numbers between 1 to 30 that are divisible by 3 and 5
for(let i = 1; i <= 30; i++){
    if( i % 3 === 0 && i % 5 === 0){
        console.log(i);
    }
}

// The sum of numbers between 1 to 20 that are divisible by 3
let sum = 0;

for(let i = 1; i <= 20; i++){
    if( i % 3 === 0){
        console.log(i);
        sum = sum + i;
    }
}

console.log('The sum of numbers between 1 to 20 that are divisible by 3: ', sum);