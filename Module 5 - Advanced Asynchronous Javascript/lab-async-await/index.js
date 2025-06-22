// Write your code here!

// // use fetch() method to access https://jsonplaceholder.typicode.com/posts
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(posts => {
//         console.log(posts.slice(0,10)); // log the post data to check the API response (limited to 10 rows)
//         displayPosts(posts); // call function after fetch
//     })
//     .catch(error => {
//         console.error("Error fetching the posts data", error);
//     })

// refactored as an async function
async function fetchAndDisplayPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();

        displayPosts(posts); // call function after fetch
    } catch (error) {
        console.error("Error fetching the posts data", error);
    }
}

// create a function to display posts
function displayPosts(posts) {
    // pass in the array of posts
    const postList = document.querySelector("#post-list");

    posts.forEach(post => { // loop through the posts list (could add a .slice(0,10) method to limit the number of posts shown)
        const listItem = document.createElement("li");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");
        
        h1.textContent = post.title; // set textContent to the title of the post
        p.textContent = post.body; // set textContent to the body of the post

        listItem.append(h1, p); // append h1 and p to li
        postList.appendChild(listItem); // append li to the ul
    });
}

// call function to display DOM on the web page
fetchAndDisplayPosts();