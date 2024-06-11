
// Define a function that will generate and return radio buttoms
const generateItemRadioButtons = () => {

    // Get the items from the database
    const items = getItems();
    const html = ""

    // Iterate that array of item objects with a for..of loop
    for (const item of items) {
        // Create an HTML string that represents each object as a radio button input field
        html += `<input type="radio" name="item" value="${item.id}">${item.name}</input>`
    }

    // Return that giant HTML string back to invoker (i.e. main.js)
    return html;
}
