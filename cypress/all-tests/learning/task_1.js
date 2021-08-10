import {isSuperSet, intersection, union, difference} from "../../utils/helper"

let mySet = new Set();

mySet.add('USD');
mySet.add('EUR');
mySet.add('BYN');
//
// console.log(mySet)

//////////TASK_2/////////////
// let currencySet = new Set()
// let curr1= {'currency': 'USD'};
// let curr2= {'currency': 'EUR'};
//
// currencySet.add(curr1);
// currencySet.add(curr2);
//console.log(currencySet);


// it('Task_2- return all values from set', ()=> {
//     mySet.forEach(currency=>{
//        cy.log(currency)
//      })
//  })



//////////TASK_3/////////////
mySet.add('RUB');
// mySet.add('RUB');
//
// it('TASK_3-verify the only unique value is added', function () {
//
//
// let count=0;
// for(let i of mySet) {
//     if (i === 'RUB') count ++;
// }
// cy.log(count == 1 ? true:false);
// //console.log(mySet);
// });


//////////TASK_4/////////////

// it('TASK_4- verify the value is displayed in set ', function () {
//   let a = 'USD';
//     cy.log(`"Set has ${a} value" ` + mySet.has(`${a}`))
// });
//
// it('TASK_4- verify the removed value is not displayed in the set',function () {
//     let a = 'USD';
//     mySet.delete(`${a}`)
//     cy.log(`"Set has ${a} value" ` + mySet.has(`${a}`))
// })


//////////TASK_5/////////////
// describe('TASK_5', () => {
//     before(() => {
//         let chance = require('chance').Chance();
//         let array = [...mySet];
//     })
//
//     let chance = require('chance').Chance();
//     it('TASK_5-  random value using chance.inger ', function () {
//         let randomsize = mySet.size;
//         let random = chance.integer({min: 0, max: randomsize-1});
//         let array = [...mySet];
//         cy.log(array[random]);
//
//     });
//
//
//     it('TASK_5 - displaying random value', function () {
//         let array = [...mySet];
//         let randomPickone = chance.pickone(array);
//         cy.log(randomPickone)
//     });
//
//     it('TASK_5 - displaying random several values', function () {
//         let array = [...mySet];
//         let randomsize = mySet.size;
//         let random = chance.integer({min: 0, max: randomsize-1});
//         let randomPickset = chance.pickset(array, `${random}`);
//         cy.log(randomPickset)
//     });
// })



//////////TASK_6/////////////
// it('TASK_6 ', function () {
//
//     let setA = new Set([1, 2, 3, 4]),
//     setB = new Set([2, 3]),
//     setC = new Set([3, 4, 5, 6]);
//
//     cy.log(isSuperSet(setA, setB));
//     cy.log(intersection(setA, setC));
//     cy.log(union(setA, setC));
//     cy.log(difference(setA, setC));
// })