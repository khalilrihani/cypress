describe('Acheter un produit ', () => {

    // Test cases pour l'ajout des produits au panier
   
   it('Acheter un produit au panier', () => {
      cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type('HTC Touch HD')
        cy.get('button[type="submit"]').contains("Search").click({force:true})   
        cy.contains("Search - HTC Touch HD")
        cy.get('#entry_212469 > .row > :nth-child(1)').click()
        // Completez le test d'achat d'un produit 
        /*
        .
        .
        .
        .
        */
        cy.get('#entry_216843 > .text').click()
        cy.get(':nth-child(6) > .custom-control-label').click()
        cy.get('#button-save').click()
        cy.get('#button-confirm').click()
   }) 
    
    
    
    //accat produit et verfier la duplication du produit 
      /*
        .
        .
        .
        .
      */  




        it('Acheter un produit au panier et duplicer le nb du produit', () => {
          cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type('HTC Touch HD')
            cy.get('button[type="submit"]').contains("Search").click({force:true})   
            cy.contains("Search - HTC Touch HD")
            cy.get('#entry_212469 > .row > :nth-child(1)').click()
          
            cy.get('#entry_216843 > .text').click()
            cy.get(':nth-child(6) > .custom-control-label').click()
            cy.get('#quantity_53542').type('10')
            cy.get('#button-save').click()
           
            cy.get('#button-confirm').click()
        })
    
  })