let score = 0;
console.log(score);
document.querySelector('body').addEventListener('click', function() {
    score ++
    document.querySelector('h1').textContent = score;
    console.log(score);
});
