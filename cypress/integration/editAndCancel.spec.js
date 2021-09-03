describe('Edit and Cancel the Added Task', () => {
    it('Edits the task in the list', () => {
        cy.visit('http://localhost:3000');
      
        cy.get('[data-testid="newTask"]')
            .type('New Task!');

        cy.get('[data-testid="addTaskBtn"]')
            .click();

        cy.get('[data-testid="tasks"]')
        .should('have.value','New Task!');

        cy.get('[data-testid="tasks')
            .invoke('text')
            .then((previousText) => {

                cy.get('[data-testid="editBtn"]')
                    .click();


                cy.get('[data-testid="tasks"]')
                    .invoke('val', '')

                cy.get('[data-testid="tasks"]')
                    .type('Updated task');

                cy.get('[data-testid="cancelBtn"]')
                    .click();

                cy.get('[data-testid="tasks"]')
                    .invoke('text')
                    .should((canclledText) => {
                        expect(previousText).to.eq(canclledText);
                    })
            });
    });
});