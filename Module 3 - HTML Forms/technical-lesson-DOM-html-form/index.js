// Write your code here!
// starter variables of shoppingList and displayCartItem
const shoppingList = [{name: "Chicken Breast", price: 10.50}, {name: "Paparika", price: 3.20}, {name: "Chips", price: 6.50}, {name: "Eggs", price: 4.00}, {name: "Milk", price: 7.80}]

function displayCartItem(item){
// Using createElement and append create new elements for each item
    const shoppingCart = document.querySelector("#cart")
    const newItem = document.createElement("li")

    const itemName = document.createElement("p")
    const itemPrice = document.createElement("p")

    itemName.textContent = item.name
    itemPrice.textContent = "$" + item.price
    
    newItem.append(itemName,itemPrice)
    shoppingCart.append(newItem)
}

// Loop through shopping list using forEach
shoppingList.forEach(item => {
	displayCartItem(item)
})

// Add submit event to form
const form = document.querySelector("#new-cart-item-form")

function handleSubmit(event){
	event.preventDefault()
    // Using event.target or a query selector get inputs and save to an object
    const newName = event.target.name.value
        const newPrice = event.target.price.value

	const newItem = {
		name: newName,
		price: newPrice
	}

	console.log(newItem)
    // Using the function of `displayCartItem` take new item and display
    displayCartItem(newItem)
}

form.addEventListener("submit", (event) => {
	handleSubmit(event)
})
