describe('Update a task', () => {
    it('Edits and save the task in the array', () => {
      cy.visit('http://localhost:3000');
      
      cy.get('[data-testid="newTask"]')
        .type('New Task!');

      cy.get('[data-testid="addTaskBtn"]')
        .click();

      cy.get('[data-testid="tasks"]')
      .should('have.value','New Task!');
      
      cy.get('[data-testid="editBtn"]')
      .click();

      cy.get('[data-testid="tasks"]')
        .invoke('val', '')

      cy.get('[data-testid="tasks"]')
        .type('Updated Task!');

      cy.get('[data-testid="saveBtn"]')
        .click();

      cy.get('[data-testid="tasks"]')
        .should('have.value','Updated Task!'); 

    })
  })