describe('wetainment', () => {
  it('has articles', () => {
    cy.visit('/')
      .getByText(/articles/i)
      .click();
  });
  it('has about', () => {
    cy.visit('/')
      .getByText(/about/i)
      .click()
      .getByText(/about me/i);
  });
  it('has contact', () => {
    cy.visit('/')
      .getByText(/contact/i)
      .click()
      .getByText(/contact me/i);
  });
  it('needs imprint', () => {
    cy.visit('/')
      .getByText(/imprint/i)
      .click()
      .getByText(/legal/i);
  });
});
