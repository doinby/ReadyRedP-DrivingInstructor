const $logoContainer = document.querySelector('#worked-with');
const $priceContainers = document.querySelectorAll('.price');
const $copyrightYear = document.querySelector('#copyright-year');
const $firstFeature1Card = document.querySelector('.feature1-card');
const $sections = document.querySelectorAll('section');
const $lastSection = $sections[$sections.length - 1];

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
    // Fix spacing on first feature1 card
    // $firstFeature1Card.style.paddingTop = 0;

    // Fix spacing on last section
    // $lastSection.style.paddingBottom = 0;

    function addLogoImages() {
        for(let i in logoNames) {
            logoPaths += `<img src='images/logos/${logoNames[i]}${fileType}' alt='${logoNames[i]}'s company logos'>`;
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

