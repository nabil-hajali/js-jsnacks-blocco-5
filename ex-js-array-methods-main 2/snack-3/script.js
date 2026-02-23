const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
const newNumbers = numbers.map((numb)=>{
    return ++numb
})

console.log(newNumbers);

// Risultato: [3, 9, 5, 8, 3, 88]

/* const numbs = []

numbers.forEach((numb)=>{
    numbs.push(++numb)
})
console.log(numbs); */