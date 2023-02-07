let items = ['bird', 'grape', 'twig'];
let questions = [
    'Is it alive?',
    'Is it red?',
    'Is it noisy?',
    'Is it a mineral?',
    'Is it edible?',
    'Is it round?',
    'Can it swim?'
];


// Get the itemsView element
let itemsView = document.getElementById('itemsView');
let innerHTML = `
<tbody>
    <tr>
        <th>Questions</th>
`

// Add the items to the itemsView first row
for (let i = 0; i < items.length; i++) {
    innerHTML += `<th>${items[i]}</th>`;
}
innerHTML += `</tr>`;

// Add the questions
for (let i = 0; i < 20; i++) {
    innerHTML += `
    <tr>
        <td>${questions[i]}</td>
        <td>Yes</td>
        <td>No</td>
        <td>No</td>
    </tr>
    `
}
innerHTML += `</tbody>`;

itemsView.innerHTML = innerHTML