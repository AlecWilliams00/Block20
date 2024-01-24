// setting up variables to store targets 
const numBank = document.getElementById("numBank")
let numBankArr=[]
const odds = document.getElementById("odds")
const evens = document.getElementById("evens")

// document.addEventListener()


// get number from input add to number bank  
function addNumber(num, event){
    event.preventDefault();
    console.log(num)
    // add num to arr
    numBankArr.push(num)
    // update html element with new arr
    numBank.innerHTML=numBankArr.join(", ")
}

    // edge case, make sure its a number 
// create function that takes in a number and decides if even or odd 
    // sort, take 1 number and sort(removing it from number bank)

    // function sortOddNumbers() {
    //     const sortButton = document.getElementById("sort");
    
    
    //     sortButton.addEventListener("click", function() {
    //         const oddNumbers = numBankArr.filter(num => num % 2 !== 0);
    //         odds.innerHTML = "Odd Numbers: " + oddNumbers.join(", ");
    //     });
    // }
    
    let oddsArr = []
    let evensArr = []

    function sort1(){
        // pop first num from array
        let firstNum = numBankArr.shift()
        // decide if even
        if(firstNum % 2 ===0){
            // if even add to even array
            evensArr.push(firstNum)
        }else{
            oddsArr.push(firstNum)
        }
            // otherwise add to odd array
            numBank.innerHTML=numBankArr.join(", ")
            // re display updated num bank array
            odds.innerHTML = oddsArr.join(", ")
            evens.innerHTML = evensArr.join(", ")
        }
    
        function sortAll() {
            // Clear existing arrays
            oddsArr = [];
            evensArr = [];
        
            // Loop through each number in numBankArr
            for (let i = 0; i < numBankArr.length; i++) {
                // Check if the number is odd or even and push to the respective array
                if (numBankArr[i] % 2 === 0) {
                    evensArr.push(numBankArr[i]);
                } else {
                    oddsArr.push(numBankArr[i]);
                }
            }
        
            // Update HTML elements
            odds.innerHTML = oddsArr.join(", ");
            evens.innerHTML = evensArr.join(", ");
        }
        ggf