/// <reference types="cypress" />
describe('e-commerce site', () => {
  it('sells two items', () => {
    cy.visit('/')
    cy.contains('nav li', 'Men').click()

    cy.log('**men\' items**')
    cy.location('pathname').should('equal', '/men')

    // let's not go crazy here, $30 is plenty!
    // we change the max value by setting the value
    // of the slider and then triggering the "input" event
    cy.get('#pricerange').invoke('val', 30).trigger('input')

    // check the number of items < $30
    cy.get('.content .item').should('have.length', 3)
      .first()
      .click()

    cy.log('**item page**')
    cy.location('pathname').should('match', /\/product\//)
    cy.contains('.product-info h1', 'Armin Basilio')
    cy.get('.size-picker').select('Large')
    // this jacket is so lovely, let's order 2
    cy.contains('.update-num', '+').click()
    cy.get('.quantity input[type=number]').should('have.value', 2)
    cy.contains('.purchase', 'Add to Cart').click()

    cy.contains('nav .carttotal', 2) // the little badge is present
    // spy on the Netlify function call
    cy.intercept({
      method: 'POST',
      pathname: '/.netlify/functions/create-payment-intent'
    }).as('paymentIntent')
    cy.contains('nav li', 'Cart').click()
    cy.log('**cart page**')
    cy.wait('@paymentIntent').its('response.body').then(JSON.parse).should('have.property', 'clientSecret')
    // always confirm the total before paying
    cy.contains('.total .golden', '$41.98')

    cy.log('**fill payment**')
    cy.get('input#email').type('test@test.com')

    // working with cross-origin Stripe iframe
    // https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/
    const ccNumber = '4242424242424242'
    const month = '12'
    const year = '30'
    const cvc = '123'
    const zipCode = '90210'
    getIframeBody('.stripe-card iframe')
      .find('input[name=cardnumber]').type(`${ccNumber}${month}${year}${cvc}${zipCode}`)
    cy.contains('.pay-with-stripe', 'Pay with credit card').click()
    // if the payment went through
    cy.contains('.success', 'Success!').should('be.visible')

    // automatically resets to empty cart
    cy.get('nav .carttotal', {timeout: 6000}).should('not.exist') // the little badge is gone
    cy.get('.empty-cart').should('be.visible')
  })

  /**
   * Little utility to find an iframe
   * @see https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/
   */
  const getIframeBody = (iframeSelector) => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
    .get(iframeSelector)
    .its('0.contentDocument.body').should('not.be.empty')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    // https://on.cypress.io/wrap
    .then(cy.wrap)
  }
})
