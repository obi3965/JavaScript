
document.getElementById('show_me').addEventListener('click', showMe)
let showTime = null;
function showMe(){
    if(showTime == null){
        showTime = setTimeout(showMe, 5000)
        return true
    }else{
        console.log('after 5 second' + showTime)
    }
}