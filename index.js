// Write your solution in this file!

var customerName = "bob"
var bestCustomer 
const leastFavoriteCustomer ="maybe bob"


function upperCaseCustomerName(){
    return customerName = customerName.toUpperCase()
}
function setBestCustomer( ){
    return bestCustomer = 'not bob'
}
function overwriteBestCustomer(modify){
    bestCustomer = modify
}
function changeLeastFavoriteCustomer(){
    try {
        return leastFavoriteCustomer = "f"
    } catch (error) {
        throw error
    }
}

console.log(changeLeastFavoriteCustomer())