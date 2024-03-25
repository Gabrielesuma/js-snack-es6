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



var bikes = [
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

let min = bikes[0].peso;
let nomeMin = bikes[0].nome;
let {nome, peso} = bikes[0];


/* let oggetto = {pro_1 : "ciao" , 
pro_2: "a tutti", pro_3};

let {pro_1, pro_2} = oggetto;
pro_1 = oggetto.pro_1;
pro_2 = oggetto.pro_2; */

bikes.forEach((bike) => {
    // se il peso della bici è minore del peso più piccolo che finora ho trovato
    if(bike.peso < min){
        //min = bike.peso;
        //nomeMin = bike.nome;
    ( {nome, peso} = bike );
    }
    // in nuovo valore del peso minimo è proprio questo
    // altrimenti non faccio niente
});

console.log(nome, peso);

var team = [
    {
        name: 'Milan',
        punti: 0,
        falliSubiti: 0
    },
    {
        name: 'Juventus',
        punti: 0,
        falliSubiti: 0
    },
    {
        name: 'Bologna',
        punti: 0,
        falliSubiti: 0
    },
    {
        name: 'Genoa',
        punti: 0,
        falliSubiti: 0
    }
];



let random = team.map((el) => {
    let puntiR = genRandom(1,90);
    let falliSubitiR = genRandom(6,20);
    let ranTeam = {...el, punti: puntiR, falliSubiti: falliSubitiR};
    return ranTeam;
});

console.log(random);

let {name, falliSubiti} = team[0];

const newFoul = team.map((el) => {
    falliSubiti = genRandom(6,20);
    ( {nome, falliSubiti} = team );
    let newTeam = {nome, falliSubiti};
    return newTeam;
})

console.log(newFoul);


function genRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}