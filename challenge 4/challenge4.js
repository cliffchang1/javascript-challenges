let firstNumber 
let secondNumber 

function getValue(){
    console.log('getting values...')
    firstNumber = document.querySelector(".first-number").value
    console.log(firstNumber)
    secondNumber = document.querySelector(".second-number").value
}

// Create button for addition
function addition(){
    // 1. get values
    getValue()
    // 2. add the numbers
    let result = parseInt(firstNumber)  + parseInt(secondNumber)
    // 3. save the answer in a variable
    // 4. show answer in result box
    document.querySelector(".result").innerHTML = result
}
function subtraction(){
    getValue()
    result = parseInt(firstNumber) - parseInt(secondNumber)
    document.querySelector(".result").innerHTML = result
}
function multiplication(){
    getValue()
    result = parseInt(firstNumber) * parseInt(secondNumber)
    document.querySelector(".result").innerHTML = result
}
function division(){
    getValue()
    result = parseInt(firstNumber) / parseInt(secondNumber)
    let remainder = parseInt(firstNumber) % parseInt(secondNumber)
    document.querySelector(".result").innerHTML = (parseInt(result) + "... remainder " +  remainder)

}