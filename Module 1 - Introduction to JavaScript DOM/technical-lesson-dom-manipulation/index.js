const userInfo = {
	username: "flatUser123",
	description: "Hi, welcome to my webpage! Just a new user of this website!",
	theme: "red"
}

function displayUser(userInfo){
	const header = document.querySelector("#main") // querySelector to select the <head>
    header.textContent = userInfo.username + "'s Personal Webpage" // change text of title
    header.className = userInfo.theme // change css class

    // create new element for description and select existing element for where it will go "<body>"
    const description = document.createElement("p")
	const body = document.querySelector("body")

    // add textContent and className variables to new element
    description.textContent = userInfo.description
	description.className = userInfo.theme

    // appends new element to existing element
	body.append(description)

}

displayUser(userInfo)