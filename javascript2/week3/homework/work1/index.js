
document.getElementById('btn_1').addEventListener('click', buttonOne)
 
function buttonOne(elem){
    let inputValue = document.getElementById('search_1').value;
    if(inputValue == ''){
        console.log('no input is shown')
    }else{
        console.log(inputValue)
    }
}