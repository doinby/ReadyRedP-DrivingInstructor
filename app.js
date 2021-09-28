// Populate logos images to logo container 
window.onload = () => {
    const logoNames = [
        'asgardia',
        'fossa',
        'ideaa',
        'solaytic',
        'velocity-9',
        'ztos'
    ];
    const fileType = '.png';
    const $logoContainer = document.querySelector('.worked-with');
    let logoPaths = [];
    for(let i in logoNames) {
        logoPaths += `<img src="images/logos/${logoNames[i]}${fileType}" alt="${logoNames[i]}'s company logos">`;
    }
    console.log(logoPaths);
    $logoContainer.innerHTML = logoPaths;
}