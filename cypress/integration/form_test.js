describe("example to-do app", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/form");
	});

	it("Check for text input", () => {
		cy.get("input[name='name']")
			.type("Jamaria")
			.should("have.value", "Jamaria");
		cy.get(`[data-cy=special]`)
			.type("Leave at door!")
			.should("have.value", "Leave at door!");
		cy.get(`[type=checkbox]`).check();
	});
});
