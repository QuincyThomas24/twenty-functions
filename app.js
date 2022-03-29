var app = 0

var heyy = 0


function askName(){
    var name = prompt("Enter your name") 
    return name
}



function randomNumber() {
    var ran = Math.floor(Math.random() * 10) + 1 // local variable - inside a function
    return ran
}



function userNumber() {

    var a = 0
    
    do{
        a = a + randomNumber() 
         
        if(a > 20){
            alert (" Sorry you went over 20. The computer has won.")
            break    
        }
        
        var number2 = prompt(`Okay the number you are holding right now is ${a}. Would you like to go again or are you okay with your number. if you are okay with your number, type no. If you would like to go again press enter`)


    } while(number2 != "no")
    return a
}


function computerNumber(){

    var b = 0

    do{
            
    
        b = b + randomNumber()
    
        alert(`the computer is holding the number ${b}`)


    } while (b < 16)
        
    if(b > 20){
    
        alert ("The computer went over 20. Congratulations, YOU WON!!!!!!.")
        app++
    
    }

    return b 

}





function comparingNumbers(x, y){
    if ((x > y) && (x <= 20) && (y <= 20)) {

        alert (`Congratulations, YOU WON!!!!!! Computer number was ${y}, and user number was ${x}.`)
        app++

    } else if ((y > x) && (y <= 20) && (x <=20)) { 

    alert (`Sorry the Computer won. Computer number was ${y}, and user number was ${x}.`)
        heyy++

    } else if (y == x){ 

        alert (`It was a tie. Computer number was ${y}, and user number was ${x}.`)

    }
}
 
askName()

function program(){

    comparingNumbers(userNumber() , computerNumber())

    alert (`here is the score: you have won ${app} amount of times and the computer has won ${heyy} amount of times`)


    var ask = prompt("If you want to play agin type 1 otherwise hit enter")

    if(ask == "1") {
        program()
    }
}

program()




    



//  var you = prompt("If you would like to play again, press enter If not type quit")


// } while  ( you != "quit" )
    




// function unit() {
//     var t = prompt("If you wish to convert from F to C, press f. If you wish to convert fro C to F, press c")
//     return t
// }


// function FtoC(fc) {
//     var answer =  fc - 32 * 5 / 9
//      return answer
// }


// function CtoF(cf) {
//     var ans =  cf * 9 / 5 + 35
//     return ans
// }


// function temperature(){
//     var cat = prompt("what is your temperature")
//     return cat 
// }

// function compare(x) {
//     if (x == "f") {
//         alert(`Hey ${askName()}, your answer is ${FtoC(temperature())}`)
//     } else{
//         alert(`Hey ${askName()}, your answer is ${CtoF(temperature())}`)
//     }
// }

// compare(unit())


//  function   comparingNumbers(x , y) { // parameter
//       if (x == y) {
//          alert(`great we were thinking number .`)
//      } else {
//           alert (`sorry, I was thinking of number ${x}, and you guessed ${y}.`)
//       }
   
//       }
   
//   comparingNumbers(computerNumber(), userNumber())










// alert (`Hey ${askName()}, your answer is ${FtoC()}`);





// if (temp == 1) {
//     var cf = prompt("What will be your C to F number?");
//     var answer = cf * 9 / 5 + 32
//     alert (`Hey ${name}, your answer is ${answer}`);
//     // c to f math

// } else if (temp == 2){ 
//     var fc = prompt ("What will be your F to C number?");
//    var answer = ((fc - 32) * 5) / 9
//    alert (`Hey ${name}, your answer is ${answer}`);
//     // f to c math

// }



























// function computerNumber() {
    //   var ran = Math.floor(Math.random() * 5) + 1 // local variable - inside a function
    //     return ran
    // }



    // function userNumber() {
    //     var user = Number(prompt("Enter a number 1 to 5."))
    //     return user
    // }
    

   
    // function   comparingNumbers(x , y) { // parameter
    //     if (x == y) {
    //         alert(`great we were thinking number .`)
    //     } else {
    //         alert (`sorry, I was thinking of number ${x}, and you guessed ${y}.`)
    //     }
   
   
    // }
   
    // comparingNumbers(computerNumber(), userNumber())













    //  function askName() {
    // var name = prompt("Enter your name") 
    //      return name
    //  }

    //  alert(`hello ${askName()}`) // invoke

    
    //  function greeting(a) { // parameter
    //      alert(`Welcome back, ${a}`)
    //  }


    


// do{


//     var ran = Math.floor(Math.random() * 10) + 1


//     alert ("I got my number now see if you can match it")

//     var number = prompt("Enter your number")

//     console.log(number)

    

//     if (ran == number){
//         app++

//         console.log(app)

//         alert (`Hey your number was ${number}. YOU WON!!!!`)

//     } else {
//         heyy++

//         console.log(heyy)

//         alert (`Aww the computers number was ${ran}. You lose better luck next`)

//     }

//     alert (`here is the score: computer has won ${heyy} amount of times and you has won ${app} amount of times`)

//     var dog = prompt ("If you would like to play again press enter. If you want to leave the game type quit")

// }while ( dog != "quit" )





//     // computer nuber
    
// var b = 0

// do{


// do{
        
//     var ran = Math.floor(Math.random() * 10) + 1

//     var b  = b + ran 

//     console.log(b)



// } while (b < 16)

// if(b > 20){

// alert (" The computer went over 20. Congratulations, YOU WON!!!!!!.")

// var a = 0

// heyy++

// } else {
//     // user number
    
    
//     alert("Your turn")

//     do{


//         var ran = Math.floor(Math.random() * 10) + 1

//         var a = a + ran 

//         console.log(a)

//         if(a > 20){
//             break
//         }

//         var number2 = prompt(`Okay the number you are holding right now is ${a}. Would you like to go again or are you okay with your number. if you are okay with your number, type no. If you would like to go again press enter`)



//     } while(number2 != "no")

//     if(a > 20){

//         alert (" Sorry you went over 20. The computer has won.")

//         app++

//     } else {

    
//     // 1/4


//            if ((b > a) && (b <= 20) && (a <= 20)) {

//             alert (`Sorry the Computer won. Computer number was ${b}, and user number was ${a}.`)

//             app++

//         } else if ((a > b) && (a <= 20) && (b <=20)) { 

//         alert (`Congratulations, YOU WON!!!!!! Computer number was ${b}, and user number was ${a}.`)

//             heyy++

//         } else if (b == a){ 

//             alert (`It was a tie. Computer number was ${b}, and user number was ${a}.`)

//         }
// }

// }
//  alert (`here is the score: computer has won ${app} amount of times and you have won ${heyy} amount of times`)


//  var you = prompt("If you would like to play again, press enter If not type quit")


// } while  ( you != "quit" )
    
































































































