document.addEventListener('DOMContentLoaded', (event)=>{
     // i made the function very generic by using arguments parameter to loop
     //through all the strings passed to the shortWord function, you can pass in any number of strings into it.
     //dont rely on reduce here .if you have multiple strings of the shortest length, it will only return the first shortest string found
     
     // i have printed out the ø in the console and also on the webpage
    const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
    function shortWord(danishWords){
        let shortestWord = arguments[4];
        for(var i = 1; i < arguments.length; i++){
            if(arguments[i].length < shortestWord.length){
                shortestWord = arguments[i]; 
               
            }
        }
        return shortestWord;
    }
    
     let output = shortWord('bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium')
    console.log(output)
    let wordOutput = document.getElementById('word-output')
    wordOutput.innerHTML = output;
   
    

})