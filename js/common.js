function getElementValueById(elementId){
    const elementField = document.getElementById(elementId)
    const elementPriceString = elementField.value
    const elementPrice = parseInt(elementPriceString)
    
    return elementPrice
    
}

function getTotalExpences(expencesId){
    const foodPrice = getElementValueById('food-price')
    const rentAmount = getElementValueById('rent-amount')
    const clothesPrice = getElementValueById('clothes-price')
    const totalExpencesField =document.getElementById(expencesId)
    const totalExpences = foodPrice + rentAmount + clothesPrice
    totalExpencesField.innerText = totalExpences
    return totalExpences
}

function getBalance (balanceId){
    const totalExpences = getTotalExpences('total-expences')
    const totalIncome = getElementValueById('income')
    const balanceField =document.getElementById(balanceId)
    const balance = totalIncome - totalExpences
    balanceField.innerText = balance
    return balance
}