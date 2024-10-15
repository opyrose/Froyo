//create a prompt for the user
//prompt asks the user to enter a list of froyo flavors seperated by commas with no spaces
const userInput = prompt(`Enter a list of froyo flavors seperated by a comma with no spaces:`, `vanilla,vanilla,vanilla,strawberry,coffee,coffee` );
//console.log(userinput)
//userInput is `vanilla,vanilla,vanilla,strawberry,coffee,coffee`

//seperate the userString with split method
const userFlavors = userInput.split(`,`);


//console.log(userFlavors)

//create an object to store flavors and count
const flavors = {

}

//loop through user input and tally each flavor
//push the flavor and tally to object
for (let i=0; i < userFlavors.length; i++){

    if (flavors[userFlavors[i]] === undefined){
      flavors[userFlavors[i]] = 1;
    } 
    else 
    {
      flavors[userFlavors[i]] ++
    }
  }
//console the object to the user
  console.log(flavors);
 