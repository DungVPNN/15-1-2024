for ( let i = 1; i <= 100; i= i +1 ){
    console.log("So", i);
    if (i%5==0 && i%3==0){
        console.log("FizzBuzz");
    }else if (i%5==0){
        console.log("Buzz");
    }else if (i%3==0){
        console.log("Fizz");
    }
}