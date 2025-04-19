// break => loop end

// Using for loop
for(let i = 0; i < 15; i++){
    console.log(i);
    if(i >= 10){
        break;
    }
}

// Using while loop
let i = 50;
while(i > 25){
    if(i < 50){
        break;
    }
    console.log(i);
    i--;
}