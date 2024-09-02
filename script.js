const carsDropList = document.getElementById('cars');
const carsCard = document.getElementById('cars-cards');

const carsArray = [
    {
        car: './car images/car1.png',
        logo: './car images/benz logo.png',
        quality: 'Drift Ability'
    },

    {
        car: './car images/car2.png',
        logo: './car images/audi logo.png',
        quality: 'Speed'
    },

    {
        car: './car images/car3.png',
        logo: './car images/nissan logo.png',
        quality: 'Speed'
    },

    {
        car: './car images/car4.png',
        logo: './car images/bmw logo.png',
        quality: 'Stability'
    },

    {
        car: './car images/car5.png',
        logo: './car images/bugatti logo.png',
        quality: 'Speed'
    },

    {
        car: './car images/car6.png',
        logo: './car images/bmw logo.png',
        quality: 'Speed'
    },

    {
        car: './car images/car7.png',
        logo: './car images/benz logo.png',
        quality: 'Drift Ability'
    },

    {
        car: './car images/car8.png',
        logo: './car images/venza logo.png',
        quality: 'Stability'
    },

    {
        car: './car images/car9.png',
        logo: './car images/bugatti logo.png',
        quality: 'Drift Ability'
    },

    {
        car: './car images/Link (1).png',
        logo: './car images/nissan logo.png',
        quality: 'Drift Ability'
    },

    {
        car: './car images/Link (2).png',
        logo: './car images/benz logo.png',
        quality: 'Stability'
    },

    {
        car: './car images/Link (3).png',
        logo: './car images/venza logo.png',
        quality: 'Drift Ability'
    },

    {
        car: './car images/Link (4).png',
        logo: './car images/nissan logo.png',
        quality: 'Stability'
    },

    {
        car: './car images/Link (5).png',
        logo: './car images/bmw logo.png',
        quality: 'Drift Ability'
    },

    {
        car: './car images/Link (6).png',
        logo: './car images/nissan logo.png',
        quality: 'Stability'
    },

    {
        car: './car images/Link (7).png',
        logo: './car images/venza logo.png',
        quality: 'Speed'
    },

    {
        car: './car images/Link (8).png',
        logo: './car images/bmw logo.png',
        quality: 'Stability'
    },

    {
        car: './car images/Link (9).png',
        logo: './car images/benz logo.png',
        quality: 'Speed'
    },
];

const setCarsFilter = (arr = carsArray) => {
    carsCard.innerHTML += arr.map(
        ({ car, logo, quality }) => `
            <div class="car-card">
                <img 
                    src="${car}" 
                    alt="car"
                    id="car-img"
                />
                <div class="car-con">
                    <img 
                        src="${logo}" 
                        alt="benz"
                        width="60"
                        height="60"
                        id="car-logo" 
                    />
                    <h1><span>Notable attribute:</span> ${quality}</h1>
                    <button type="button">Shop Now</button>
                </div>
            </div>
        `
    ).join('');
};

carsDropList.addEventListener('change', (e) => {
    carsCard.innerHTML = '';

    switch (e.target.value) {
        case 'fast':
            setCarsFilter(carsArray.filter((carType) => carType.quality === 'Speed'));
            break;
        case 'balance':
            setCarsFilter(carsArray.filter((carType) => carType.quality === 'Stability'));
            break;
        case 'drift':
            setCarsFilter(carsArray.filter((carType) => carType.quality === 'Drift Ability'));
            break;
        
        default: setCarsFilter();
    }
});