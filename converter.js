function convertMe() {
    const feet = document.getElementById('feetInput').value;
    if (feet) {
        const meters = (feet * 0.3048).toFixed(2); 
        document.getElementById('metersOutput').value = meters + ' meters';
    }
}
document.getElementById('convertButton').addEventListener('click', convertMe);
