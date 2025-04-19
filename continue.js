// continue => skip rest of the code for this iteration

// Using for loop
for(let i = 1; i < 10; i++){
    if(i % 2 !== 0){
        continue;
    }
    console.log(i);
}

// Using while loop
let i = 0;
while(i < 50){
    n++;
    if(i % 5 !== 0){
        continue;
    }
    console.log(i);
}