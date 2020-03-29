document.addEventListener('DOMContentLoaded', (event)=>{

     //create an for spirit animals
    const spirit_animals = ["dog", "cat", "lion", "tiger", "cow", "rabbit", "horse" ];
    
      let printValue = document.getElementById('print_value');
      printValue.addEventListener('click', ()=>{
          let input_value = document.getElementById('input_value').value;
      
          spirit_animals.push(input_value);

          let output = '';

          for(i = 0; i < spirit_animals.length; i++){
              output = output + spirit_animals[i]
          }

          document.getElementById('pText').innerHTML = output
        })

    
        const inputTag = document.getElementById('input');
        const btnTag = document.getElementById('get-spiritual-name');
        const pTag = document.getElementById('spiritual-name');
        const selectOption = document.getElementById('select-option');
        
        const spiritAnimal = ['The crying butterfly', 'The fullmoon wolf', 'The fearless tiger', 'The forest rabit', 'The yelling monkey', 'The strong deer', 'The talking snake', 'The beautiful cow', 'The dancing bear', 'The happy duck'];
        function onClick() {
            const name = getName(inputTag);
            const animal = getRandomName(spiritAnimal);
            pTag.textContent = `${name} - ${animal}`;
        }
        
        function onClickHandler() {
            if (selectOption.value !== 'click-btn')
                return;
            if (!getName(inputTag)) {
                pTag.textContent = 'First enter your name';
            }
            else onClick();
        }
        btnTag.addEventListener('click', onClickHandler);
        
        function onSelectOptionKeyUp() {
            if (selectOption.value !== 'text-written')
                return;
            else onClick();
        }
        inputTag.addEventListener('keyup', onSelectOptionKeyUp);
        
        function onMouseover() {
            if (selectOption.value !== 'hover-input')
                return;
            else onClick();
        }
        inputTag.addEventListener('mouseover', onMouseover);


})