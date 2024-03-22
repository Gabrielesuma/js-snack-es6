const tavoloVip = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];
const vip = tavoloVip.map((el) => {
    return {tableName: 'Tavolo Vip', guestName: el, place: genRandom(1, 100)}; 
});

console.log(vip);



function genRandom(min, max){
    return Math.floor(Math.random() * max - min + 1) + min;
}