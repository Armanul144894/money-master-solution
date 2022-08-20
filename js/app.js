document.getElementById('calculate-btn').addEventListener('click',function(){
    // const foodElementField = document.getElementById('food-price')
    // const foodPriceString = foodElementField.value 
    // const foodPrice = parseInt(foodPriceString)
    // console.log(foodPrice)
    

    // const rentElementField = document.getElementById('rent-amount')
    // const rentAmountString = rentElementField.value 
    // const rentAmount = parseInt(rentAmountString)
    // console.log(rentAmount)

    // const clothesElementField = document.getElementById('clothes-price')
    // const clothesPriceString = clothesElementField.value 
    // const clothesPrice = parseInt(clothesPriceString)
    // console.log(clothesPrice)

    
    const totalIncome = getElementValueById('income')
    const foodPrice = getElementValueById('food-price')
    const rentAmount = getElementValueById('rent-amount')
    const clothesPrice = getElementValueById('clothes-price')
    
    
    if(isNaN(totalIncome) && isNaN(foodPrice) && isNaN(rentAmount) && isNaN(clothesPrice)){
        alert('please provide valid number')
        return
    }

    
    const totalExpences = getTotalExpences('total-expences')
    const balance =getBalance('balance')
    
})

document.getElementById('save-btn').addEventListener('click',function(){
    const percentage = getElementValueById('percentage')
    if(isNaN(percentage)){
        alert('please provide valid number')
        return
    }
    const totalIncome = getElementValueById('income')
    const balance =getBalance('balance')
    

    const savingAmountField = document.getElementById('saving-amount')
    const savingAmount = (totalIncome * (percentage/100))
    savingAmountField.innerText = savingAmount

    const remainingBalanceField = document.getElementById('remaining-balance')
    const remainingBalance = balance - savingAmount
    remainingBalanceField.innerText = remainingBalance
})