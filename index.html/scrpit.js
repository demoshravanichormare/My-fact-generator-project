document.getElementById('fun-facts-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name-input').value;
    const age = document.getElementById('age-input').value;
    const hobby = document.getElementById('hobby-input').value;

    const funFacts = generateFunFacts(name, age, hobby);
    document.getElementById('fun-facts-output').innerText = funFacts;
});

function generateFunFacts(name, age, hobby) {
    return `${name} is ${age} years old and loves ${hobby}.`;
}
