document.addEventListener('DOMContentLoaded', (event)=>{

    
const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

function getAvg (housePrices){
    const total = housePrices.reduce((acc, c) => acc + c, 0);
  return total / housePrices.length;
}

const average = getAvg(housePrices);
console.log(average);



})