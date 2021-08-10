import Chance from 'Chance';
  let chance = require('chance').Chance();

let currency = {
    "base": 'USD',
    "date": "2018-02-13",
    "rates": [
        {shortName: "CAD", rate: 1.260046},
        {shortName: "CHF", rate: 0.933058},
        {shortName: "EUR", rate: 0.806942},
        {shortName: "GBP", rate: 0.719154}
    ]}
let currencyShortName = [];
for(let i=0; i < currency.rates.length; i++){
    currencyShortName.push(currency.rates[i].shortName);
}
let randomValue = chance.integer({ min: 0, max: (currencyShortName.length - 1) });
let randomCurrency = currencyShortName[randomValue];

let currencyRate = [];
for (let i=0; i < currency.rates.length; i++){
    currencyRate.push(currency.rates[i].rate)
}
let randomRate = currencyRate[randomValue];


it('currencyConverter', function () {
    cy.visit('https://www.xe.com/currencyconverter');
    cy.get('#midmarketToCurrency').click();
    cy.get('input[id="midmarketToCurrency"]').type(`${randomCurrency}`)
    cy.get('#midmarketToCurrency-option-0').click()
    cy.xpath("//button[@class ='button__BaseButton-sc-1qpsalo-0 koRzhb'][contains(text(),'Convert')]").click()
    cy.xpath("//p[@class ='result__BigRate-sc-1bsijpp-1 iGrAod']").should('have.value', `${randomRate}`)

});