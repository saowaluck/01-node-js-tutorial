const Fizzbuzz = function(number){
    if( number % 5 == 0 && number % 3 ==0 ){
        console.log('fizzbuss')
    }else if( number % 3 == 0){
        console.log('buss')
    }else if( number % 5 == 0){
        console.log('fizz')
    }else{
        console.log(number)
    }
}


Fizzbuzz(15)
Fizzbuzz(3)
Fizzbuzz(5)
Fizzbuzz(11)
