const $logoContainer = document.querySelector('.worked-with');
const $priceContainers = document.querySelectorAll('.price');
const $copyrightYear = document.querySelector('#copyright-year');

const logoNames = [
    'asgardia',
    'fossa',
    'ideaa',
    'solaytic',
    'velocity-9',
    'ztos'
];
const fileType = '.png';
let logoPaths = [];

const price = [60, 500, 900];
const lessonPack = [0, 10, 20];


window.onload = () => {
    function addLogoImages() {
        for(let i in logoNames) {
            logoPaths += `<img src="images/logos/${logoNames[i]}${fileType}" alt="${logoNames[i]}'s company logos">`;
        }
        // Populate logos images to logo container
        $logoContainer.innerHTML = logoPaths;
    }
    addLogoImages();

    function addPrice() {
        let perLesson;
        $priceContainers.forEach((container, index) => {
            if(index > 0) {
                perLesson = price[index] / lessonPack[index];
                container.textContent = `$${perLesson.toFixed(0)} / per lesson or $${price[index]}`;
            } else container.textContent = `$${price[index]}`;
        });
    }
    addPrice();

    function addCopyright() {
        const today = new Date()
        const currentYear = today.getUTCFullYear();

        // Dynamically update current year
        $copyrightYear.textContent = `© ${currentYear} All Right Reserved`;
    }
    addCopyright();
}

