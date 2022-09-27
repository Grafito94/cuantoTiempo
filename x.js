/*// recursive (LA RECURSIVA ES MAS RAPIDA)
const { performance } = require('perf_hooks');
const start = performance.now();
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
console.log(rFib(20));
console.log(`This time ${performance.now() - start} milliseconds to run`);

// iterative
const { performance } = require('perf_hooks');
const start = performance.now();
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
console.log(iFib(20));
console.log(`This time ${performance.now() - start} milliseconds to run`);*/
/*
const { performance } = require('perf_hooks');
const start = performance.now();

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");

console.log(reversed1);
console.log(`This time ${performance.now() - start} milliseconds to run`);*/

const { performance } = require('perf_hooks');
const start = performance.now();
const invertirCadena = cadena => {
    let nuevaCadena = "";
    for (let x = cadena.length - 1; x >= 0; x--) {
        nuevaCadena += cadena[x];
    }
    return nuevaCadena;
}

console.log(invertirCadena("Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!"));
console.log(`This time ${performance.now() - start} milliseconds to run`);