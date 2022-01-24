const PossibleLast = [
    'Ann',
    'Ba',
    'Chen',
    'Century',
    'Cherry',
    'Cross',
    'Dan',
    'Elma',
    'Ferni',
    'Fairr',
    'Ficus',
    'Gale',
    'Green',
    'Harmony',
    'Heritage',
    'Hickory',
    'Magnolia',
    'Maple',
    'Oak',
    'Old',
    'Pebble',
    'Placid',
    'Pleasant',
    'Reddy',
    'Rocky',
    'Rolling',
    'Rose',
    'Sunny',
    'Sun',
    'Tranquil',
    'Walnut',
    'Willow',
    'Whispering',
    'Xiily',
];
const PossibleFirst = [
    'Hope',
    'Launa',
    'Katherine',
    'Walker',
    'Moses',
    'Tayna',
    'Rosia',
    'Yahaira',
    'Tommy',
    'Elwanda',
    'Clorinda',
    'Sheron',
    'Kayla',
    'Clementina',
    'Rene',
    'Rex',
    'Kathy',
    'Latoya',
    'Shirleen',
    'Shoshana',
];
const randomNameGenerator = () => {
    let finalName = '';
    const firstRandomIndex = Math.floor(Math.random() * PossibleFirst.length);
    const lastRandomIndex = Math.floor(Math.random() * PossibleLast.length);
    finalName = PossibleFirst[firstRandomIndex] + PossibleLast[lastRandomIndex];
    return finalName;
};

export default randomNameGenerator;
