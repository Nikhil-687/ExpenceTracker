document.addEventListener('DOMContentLoaded',() => {
    let expenceInput = document.getElementById('Expencename');
    let amountInput = document.getElementById('Investment');
    let form = document.getElementById('inputForm');
    let sum = 0;
    let Expences = JSON.parse(localStorage.getItem('expences')) || [];
    if(Expences.length === 0){
        document.getElementById('empty').classList.add('hidden');   
    }
    else{
        Expences.forEach((e) => {
            let newExpence = document.createElement('li');
            newExpence.textContent = e.value;
            let newButton = document.createElement('button');
            newButton.textContent = 'Remove';
            newButton.addEventListener('click', () => {

            })
            newExpence.appendChild(newButton);
            document.getElementById('listExpences').appendChild(newExpence);
        })
    }


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if(amountInput.value === '' || expenceInput.value.trim() === '')return;
        sum += amountInput.value;
        let newExpence = document.createElement('li');
        newExpence.textContent = `${expenceInput.value} - $${amountInput.value}`;
        let newButton = document.createElement('button');
        newButton.textContent = 'Remove';
        Expences[Expences.length] = newExpence.textContent;
        localStorage.setItem('expences',JSON.stringify(Expences));
        newButton.addEventListener('click', () => {

        })
        newExpence.appendChild(newButton);
        document.getElementById('listExpences').appendChild(newExpence);

    })    

})