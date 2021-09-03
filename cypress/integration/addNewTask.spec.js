describe('Add new task', () => {
    it('Adds the task into the array', () => {
      cy.visit('http://localhost:3000');
      
      cy.get('[data-testid="newTask"]')
        .type('New Task!');

      cy.get('[data-testid="addTaskBtn"]')
        .click();

      cy.get('[data-testid="tasks"]')
      .should('have.value','New Task!');
    })
  })