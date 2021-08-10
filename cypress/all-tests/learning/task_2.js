let planets = [
    {planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395},
    {planet: "Venus", radius: 6052, density: 5.24, distance: 0.723},
    {planet: "Earth", radius: 6378, density: 5.52, distance: 1},
    {planet: "Mars", radius: 3396, density: 3.93, distance: 1.53},
    {planet: "Jupiter", radius: 71492, density: 1.33, distance: 5.21},
    {planet: "Saturn", radius: 60268, density: 0.69, distance: 9.551},
    {planet: "Uranus", radius: 25559, density: 1.27, distance: 19.213},
    {planet: "Neptune", radius: 24764, density: 1.64, distance: 30.07}
]
// it('TASK_1 ', function () {
//
// planets.forEach((item, index, array) => {
//     cy.log(item.density, item.distance, item.planet, item.radius);
    //    planets.forEach(planet => {
//         cy.log(JSON.stringify(planet));
//     })
// })
// });

// it('TASK_2 ', function () {
//  planets.map(el => el.solarSystem=true )
//     planets.forEach(planet => {
//         cy.log(JSON.stringify(planet))
//     })
//     planets.forEach(planet =>{
//         cy.log(Object.keys(planet).map(key => key + ':' + planet[key]).join(','))
//     })
//
// });

// it('TASK_3 ', function () {
//     planets.push({planet: "SomeNewPlanet", radius: 24764, density: 1.64, distance: 30.07, solarSystem: false})
// planets.forEach(el=>{
//     cy.log(JSON.stringify(el))
// })
// });

// it('TASK_4', function () {
//     cy.log(planets.reduce((a,b) => ({radius: a.radius + b.radius})));
// });

// it('TASK_5', function () {
//     planets.filter(el => el.distance > 5).forEach(planet => {
//         cy.log(JSON.stringify(planet))
//     })
// });

// it('TASK_6 ', function () {
//     let index = planets.findIndex(el => el.planet == "SomeNewPlanet");
//     planets.splice(index, 1)
//     .forEach(el => {
//         cy.log(JSON.stringify(el))
//     })
// });

// it('TASK_7', function () {
//     planets.sort((a,b) => a.radius - b.radius)
//         .forEach(el=> {
//             cy.log(JSON.stringify(el))
//         })
// });

// it('TASK_8', function () {
//     planets.sort((a,b) => a.planet.localeCompare(b.planet))
//         .forEach(el=> {
//             cy.log(JSON.stringify(el))
//         })
// });

// it('TASK_9', function () {
//     cy.log(planets.length)
// });