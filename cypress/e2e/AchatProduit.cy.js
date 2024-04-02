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
    })
    
    //Ajoutez autres tests cases pour l'achat des produits 
      /*
        .
        .
        .
        .
      */  
    
  })