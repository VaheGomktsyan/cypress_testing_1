describe("To-Do List Application", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".task-input").should("be.visible");
    cy.get(".add-btn").should("be.visible");
    cy.get(".container").should("be.visible");

    const newTask = "I will practice React for 2 hours";
    cy.get(".task-input").type(newTask);
    cy.get(".add-btn").click();
    cy.get(".task-list").should("contain", newTask);

    const tasks = [
      "I will wake up at 8 in the morning",
      "I will practice HTML for 1 hour",
      "I will give time for 2 hours CSS",
      "Then I will have breakfast",
    ];

    tasks.forEach((task) => {
      cy.get(".task-input").type(task);
      cy.get(".add-btn").click();
    });

    tasks.forEach((task) => {
      cy.get(".task-list").should("contain", task);
    });

    const task = "I will practice JavaScript for 1 hour";
    cy.get(".task-input").type(task);
    cy.get(".add-btn").click();

    cy.get(".task-list").should("contain", task);
    cy.get(".delete-btn").first().click();
    cy.get(".task-list").first().should("not.contain", task);

    cy.get(".task-input").should("have.value", "");
    cy.get(".add-btn").click();
    // cy.get(".task-list").children().should("have.value");

    cy.get(".task-list")
      .children()
      .each(($el) => {
        cy.wrap($el).find("span").should("exist");
        cy.wrap($el).find("button").should("exist");
      });
  });
});
