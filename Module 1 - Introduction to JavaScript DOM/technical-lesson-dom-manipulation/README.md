### Technical Lesson: DOM Manipulation

**Overview**

**Scenario:** Flatspace is a social media company that wants to work on features to personalize its users' account page. They want you to develop a function that will take an object of user information and display the details of the object onto a webpage. By manipulating the DOM along with the given object, we will be able to dynamically load the user information onto the webpage


**Estimated Completion Time:** 30-60 minutes


**Instructions**

1. **Fork and Clone the Repository:**
   - Go to the provided GitHub repository link.
   - Fork the repository to your GitHub account.
   - Clone the forked repository to your local machine.
   - Open the project in VSCode.
   - Run `npm install` to install all necessary dependencies.

2. **Set up the starter variables:**
   - Set up the starter variables of userInfo and displayUser
 
 ``` js
const userInfo = {
	username: "flatUser123",
	description: "Hi, welcome to my webpage! Just a new user of this website!",
	theme: "red"
}

function displayUser(userInfo){

}

displayUser(userInfo)
 ```

3. **Select elements**
   - Use querySelector to select Header

```js
const userInfo = {
	username: "flatUser123",
	description: "Hi, welcome to my webpage! Just a new user of this website!",
	theme: "red"
}

function displayUser(userInfo){
	const header = document.querySelector("#main")
}

displayUser(userInfo)
```

4. **Open the webpage for testing**
   - To open the webpage using one of the following commands given your environment:
      - Local environment on Mac: Run `open index`.html in the terminal.
      - Local environment using WSL/Ubuntu: Run `explorer.exe index.html` in the terminal.


5. **Edit text content**
   - Use textContent to change the text of the title
```js
const userInfo = {
	username: "flatUser123",
	description: "Hi, welcome to my webpage! Just a new user of this website!",
	theme: "red"
}

function displayUser(userInfo){
	const header = document.querySelector("#main")
	header.textContent = userInfo.username + "'s Personal Webpage"
}

displayUser(userInfo)
```

6. **Change classname**
   - Use className to change css class

```js
const userInfo = {
	username: "flatUser123",
	description: "Hi, welcome to my webpage! Just a new user of this website!",
	theme: "red"
}

function displayUser(userInfo){
	const header = document.querySelector("#main")
	header.textContent = userInfo.username + "'s Personal Webpage"
	header.className = userInfo.theme
}

displayUser(userInfo)
```

7. **Create and select elements**
   - Create new element for description and select existing element of where it will go

```js
const userInfo = {
	username: "flatUser123",
	description: "Hi, welcome to my webpage! Just a new user of this website!",
	theme: "red"
}

function displayUser(userInfo){
	const header = document.querySelector("#main")
	header.textContent = userInfo.username + "'s Personal Webpage"
	header.className = userInfo.theme

	const description = document.createElement("p")
	const body = document.querySelector("body")
}

displayUser(userInfo)
```

8. **Add details**
   - Add textContent and className to new element

```js
const userInfo = {
	username: "flatUser123",
	description: "Hi, welcome to my webpage! Just a new user of this website!",
	theme: "red"
}

function displayUser(userInfo){
	const header = document.querySelector("#main")
	header.textContent = userInfo.username + "'s Personal Webpage"
	header.className = userInfo.theme

	const description = document.createElement("p")
	const body = document.querySelector("body")

	description.textContent = userInfo.description
	description.className = userInfo.theme
}

displayUser(userInfo)
```

9. **Add new element to DOM**
   - Append new element to existing element

```js
const userInfo = {
	username: "flatUser123",
	description: "Hi, welcome to my webpage! Just a new user of this website!",
	theme: "red"
}

function displayUser(userInfo){
	const header = document.querySelector("#main")
	header.textContent = userInfo.username + "'s Personal Webpage"
	header.className = userInfo.theme

	const description = document.createElement("p")
	const body = document.querySelector("body")

description.textContent = userInfo.description
	description.className = userInfo.theme

	body.append(description)
}

displayUser(userInfo)
```


