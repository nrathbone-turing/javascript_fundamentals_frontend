### Technical Lesson: DOM HTML Forms

**Overview**

**Scenario:** Flatiron Supermarket wants to further improve the functionality of their website. They would like to add a feature that allows users to be able to add a new item to the item list, while maintaining the functionality for their web page that allows users to add items to their cart that they would like to purchase from the supermarket


**Estimated Completion Time:** 30-60 minutes


**Instructions**

1. **Fork and Clone the Repository:**
   - Go to the provided GitHub repository link.
   - Fork the repository to your GitHub account.
   - Clone the forked repository to your local machine.
   - Open the project in VSCode.
   - Run `npm install` to install all necessary dependencies.

2. **Set up the starter variables:**
   - Set up the starter variables of shoppingList and displayCartItem
 
 ``` js
 const shoppingList = [{name: "Chicken Breast", price: 10.50}, {name: "Paparika", price: 3.20}, {name: "Chips", price: 6.50}, {name: "Eggs", price: 4.00}, {name: "Milk", price: 7.80}]

function displayCartItem(item){

}
 ```

3. **Loop through elements**
   - Loop through shopping list using forEach

```js
const shoppingList = [{name: "Chicken Breast", price: 10.50}, {name: "Paparika", price: 3.20}, {name: "Chips", price: 6.50}, {name: "Eggs", price: 4.00}, {name: "Milk", price: 7.80}]

function displayCartItem(item){

}

shoppingList.forEach(item => {
	displayCartItem(item)
})
```

4. **Create and add elements**
   - Using createElement and append create new elements for each item

```js
const shoppingList = [{name: "Chicken Breast", price: 10.50}, {name: "Paparika", price: 3.20}, {name: "Chips", price: 6.50}, {name: "Eggs", price: 4.00}, {name: "Milk", price: 7.80}]

function displayCartItem(item){
	const shoppingCart = document.querySelector("#cart")
	const newItem = document.createElement("li")

	const itemName = document.createElement("p")
	const itemPrice = document.createElement("p")

	itemName.textContent = item.name
	itemPrice.textContent = "$" + item.price
	
	newItem.append(itemName,itemPrice)
	shoppingCart.append(newItem)
}

shoppingList.forEach(item => {
	displayCartItem(item)
})
```

5. **Select Form and add event listener to form**
   - Add submit event to form
```js
const shoppingList = [{name: "Chicken Breast", price: 10.50}, {name: "Paparika", price: 3.20}, {name: "Chips", price: 6.50}, {name: "Eggs", price: 4.00}, {name: "Milk", price: 7.80}]

function displayCartItem(item){
	const shoppingCart = document.querySelector("#cart")
	const newItem = document.createElement("li")

	const itemName = document.createElement("p")
	const itemPrice = document.createElement("p")

	itemName.textContent = item.name
	itemPrice.textContent = "$" + item.price
	
	newItem.append(itemName,itemPrice)
	shoppingCart.append(newItem)
}

shoppingList.forEach(item => {
	displayCartItem(item)
})

const form = document.querySelector("#new-cart-item-form")

function handleSubmit(event){
	event.preventDefault()
}

form.addEventListener("submit", (event) => {
	handleSubmit(event)
})
```

6. **Using event gather data into an object**
   - Using event.target or a query selector get inputs and save to an object

```js
const shoppingList = [{name: "Chicken Breast", price: 10.50}, {name: "Paparika", price: 3.20}, {name: "Chips", price: 6.50}, {name: "Eggs", price: 4.00}, {name: "Milk", price: 7.80}]

function displayCartItem(item){
	const shoppingCart = document.querySelector("#cart")
	const newItem = document.createElement("li")

	const itemName = document.createElement("p")
	const itemPrice = document.createElement("p")

	itemName.textContent = item.name
	itemPrice.textContent = "$" + item.price
	
	newItem.append(itemName,itemPrice)
	shoppingCart.append(newItem)
}

shoppingList.forEach(item => {
	displayCartItem(item)
})

const form = document.querySelector("#new-cart-item-form")

function handleSubmit(event){
	event.preventDefault()
	const newName = event.target.name.value
     const newPrice = event.target.price.value

	const newItem = {
		name: newName,
		price: newPrice
	}
	console.log(newItem)
}

form.addEventListener("submit", (event) => {
	handleSubmit(event)
})
```

7. **Add object to list and display**
   - Using the function of `displayCartItem` take new item and display

```js
const shoppingList = [{name: "Chicken Breast", price: 10.50}, {name: "Paparika", price: 3.20}, {name: "Chips", price: 6.50}, {name: "Eggs", price: 4.00}, {name: "Milk", price: 7.80}]

function displayCartItem(item){
	const shoppingCart = document.querySelector("#cart")
	const newItem = document.createElement("li")

	const itemName = document.createElement("p")
	const itemPrice = document.createElement("p")

	itemName.textContent = item.name
	itemPrice.textContent = "$" + item.price
	
	newItem.append(itemName,itemPrice)
	shoppingCart.append(newItem)
}

shoppingList.forEach(item => {
	displayCartItem(item)
})

const form = document.querySelector("#new-cart-item-form")

function handleSubmit(event){
	event.preventDefault()
	const newName = event.target.name.value
     const newPrice = event.target.price.value

	const newItem = {
		name: newName,
		price: newPrice
	}

	shoppingList.push(newItem)
	displayCartItem(newItem)
}

form.addEventListener("submit", (event) => {
	handleSubmit(event)
})
```





