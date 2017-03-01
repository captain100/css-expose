// function* generatorFun() {
//     yield 'hello'
//     yield 'world'
//     return 'ending'
// }


// var fn = generatorFun()

// while (!fn.next().done) {
//     fn.next()
// }

// function* testFun() {
//     yield '1111'
//     return '2222'
//     yield '33333'
// }


// var fn2 =  testFun()

// while (!fn2.next().done) {
//     console.log(fn2.next())
// }



// // var arr = [1, [[2, 3], 4], [5, 6]];
// var arr = [1,[2,3,[4]],5]

// var flat = function* (a) {
//     var length = a.length
//     for (var i = 0; i < length; i++) {
//         var item = a[i]
//         if (typeof item !== 'number') {
//             yield* flat(item)
//         } else {
//             yield item
//         }
//     }
// };

// for(var f of flat(arr)) {
//     // console.log(f)
// }

// function* fibonacci() {
//   let [prev, curr] = [0, 1];
//   for (;;) {
//     [prev, curr] = [curr, prev + curr];
//     yield curr;
//   }
// }

// for (let n of fibonacci()) {
//   if (n > 10) break;
//   console.log(n);
// }




// function* throwError () {
//     try {
//         yield
//     } catch (e) {
//         if (e !== 'a') throw(e)
//         console.log('innert catch', e)
//     }
// }

// var err = throwError()
// err.next()

// try {
//     err.throw('a')
//     err.throw('b')
// } catch (e) {
//     console.log('out catch', e)
// }

// var flat = function* (_) {
//     while(true) {
//         yield _
//         console.log('lock')
//         yield _
//         console.log('unlock')
//     }
// }

// for(var item of flat()) {

// }


function main() {
    console.log(i)
    i = 'hello ' + i
    return 'main: ' +  i
}

var i = 'world'
console.log(main())





