// Get global access to all inputs / divs here 
const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotal = document.getElementById('perPersonTotal');



// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText);


// ** Calculate the total bill per person **
const calculateBill = () => {
    
    // its an input i need the value of billInput
    const bill = Number(billInput.value)
    
  
    
     // its an input i need the value of tipInput
     const tip = Number(tipInput.value)
  
    // get the total tip amount
    const tipAmount = bill * tip; 
    
  
    // calculate the total 
    const totalAmount = tipAmount + bill
    
  
    // calculate the per person total (total divided by number of people)
    const perPerson = totalAmount / numberOfPeople
  
  
    // update the perPersonTotal on DOM & show it to user
    perPersonTotal.innerText = `$${perPerson.toFixed(2)}`
  
  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    // increment the amount of people
    numberOfPeople += 1
  
  
    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople
  
  
    // calculate the bill based on the new number of people
    calculateBill();
  
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
    if(numberOfPeople <= 1 ) {
        throw 'error'
    }
    
    // decrement the amount of people
    numberOfPeople -= 1
  
    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople
  
  
    // calculate the bill based on the new number of people
    calculateBill();
  }