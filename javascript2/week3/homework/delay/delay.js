

var notThisFunction = function(callback,delay,stringsToLog) {
   
    var stringsToLog = [].slice.call(arguments) // get the parent arguments and convert to an array
    stringsToLog.splice(0,2); // remove the first two argument which are the fuction supplied and the wait time
    
    // a fuction to call the supplied function
        var callnow =  function() {  
        var params = arguments; // get the child arguments 
        var context = this;
        
        setTimeout(function(){
          callback.apply(context, params) // call the function 
        }, delay);
      }
         
         callnow.apply( this, stringsToLog ) // use apply to supply the arguments extracted from the parrent
       };
    
    
       notThisFunction(console.log, 3000,"string to log after 3 seconds")
    
       notThisFunction(console.log, 5000, "string to log after 5 seconds")
