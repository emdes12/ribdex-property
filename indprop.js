console.log("heyeheyeheyeheyeheyeheyeheyeheyeheyehey")
const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get('type');
const title = urlParams.get('title');

console.log("Type:", type);
console.log("Title:", title);

// Example usage: Displaying the values in the HTML
document.addEventListener('DOMContentLoaded', () => {
    const typeDisplay = document.getElementById('type-display');
    const titleDisplay = document.getElementById('title-display');

    if (title) { // Check if the title parameter exists
        document.title = title;
    } else {
        document.title = "Ribdex Properties"; // Set a default title if the parameter is missing
    }
});