const tavoloVip = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];
const vip = tavoloVip.map((el) => {
    return {tableName: 'Tavolo Vip', guestName: el, place: genRandom(1, 100)}; 
});

console.log(vip);


var classe = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grade: 78
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grade: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grade: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grade: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grade: 68
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grade: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grade: 84
    }
];

const newClass = classe.map((el) => {
    return el.name.toUpperCase();
})
console.log(newClass);

const over70 = classe.filter((el) => {
    return el.grade > 70;
})
console.log(over70);

const gradeId = classe.filter((el) => {
    return el.grade > 70 && el.id > 120;
})
console.log(gradeId);


function genRandom(min, max){
    return Math.floor(Math.random() * max - min + 1) + min;
}


const bike = [
    {
        nome: 'bianchi',
        peso: 60
    },
    {
        nome: 'atala',
        peso: 72
    },
    {
        nome: 'basso',
        peso: 54
    },
    {
        nome: 'bottecchia',
        peso: 78
    },
    {
        nome: 'carrera',
        peso: 67
    }
];

let min = 0;
const {peso} = bike;

bike.forEach((el, i) => {
    
    
    min = peso < peso[i + 1] ? el.peso : el.peso[i + 1];
});
console.log(min);