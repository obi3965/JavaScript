document.addEventListener('DOMContentLoaded', (event)=>{


    // let numbers = [1, 2, 3, 4];
    // let newNumbers = [];
    
    // for(let i = 0; i < numbers.length; i++) {
    //     if(numbers[i] % 2 !== 0) {
    //         newNumbers[i] = numbers[i] * 2;
    //     }
    // }
    
    // console.log("The doubled numbers are", newNumbers); // [2, 6]

     
     
    //we dont need to loop anymore, for adding numbers manually into an array
    //instead of a simple we shoud let the map do the work, this can be easily done by map.
    let numbers = [1, 2, 3, 4];
    let newNumbers = []
    newNumbers = numbers.map(number =>{
       return number * 2 
    })
    console.log("The doubled numbers are in map", newNumbers);
    

     //
    let filterNumbers =[1, 2, 3, 4]
    let filterNewNumbers =[]
     filterNewNumbers = filterNumbers.filter(filterNumber =>{
       return (filterNumber % 5 !== 0);
    }).map(filterNumber =>{
        return filterNumber * 2
    })

    console.log('the doubled number are in filter', filterNewNumbers)




})