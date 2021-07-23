describe("example to-do app", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");
	});

	it("Check for text input", () => {
		cy.get('[id="name-input"]').then(($input) => {
			const input = $input.data;
			console.log($input.data);
		});
		cy.get(`[id = "order-button"]`)
			.click()
			.then(($res) => {
				return $res;
			});
	});
});
