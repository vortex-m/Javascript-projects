const form = document.querySelector('form')

// This usecase gives you an empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')


    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else {
       const val = (weight / ((height * height) / 10000)).toFixed(2)

       if(val < 18.6){
        results.innerHTML = `You are Under weight and your BMI is ${val}`;
       }
       else if(val >= 18.6 && val <= 24.9){
        results.innerHTML = `You are normal range and your BMI is ${val}`;
       }
       else if(val > 24.9){
        results.innerHTML = `You are over weight and your BMI is ${val}`;
       }
    }

})