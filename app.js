let favMovie = (movie = 'The Rome', name = 'tommy wiseu') => console.log(`My name is ${name}, my favorite movie is ${movie}`);

// favMovie();

let getFirstName = name => {
    console.log(name.split(' ')[0]);
}

let getFirstNameConscise = name => console.log(name.split(' ')[0]);

// getFirstName("jonny walker");
// getFirstNameConscise("j dubbs");

let doMath = (x, y) => {
    let theExponenet = x ** y;
    let theProduct = x * y;
    return {
        theExponenet,
        theProduct
    };
}

// let trying = doMath(4, 5);
// console.log(`The Exponent is, ${trying.theExponenet}`);
// console.log(`The Product is, ${trying.theProduct}`);

// console.log(5 * 5);
// console.log(5 ** 5);

let stuff = (name, location, favFood) => {
    console.log(`your name is , ${name},
you're are in, ${location}, 
your favorite food is, ${favFood}.`);
}

let lestuffs = ['bob', 'Alaska', 'anchovies'];
// stuff(...lestuffs);

let theSpreader = (spreadThatShit) => {
    let newArray = [...spreadThatShit];
    for (i=0; i<newArray.length; i++) {
        console.log(newArray[i]);
    }
}

let named = 'jonny';
theSpreader(named);
theSpreader(lestuffs);