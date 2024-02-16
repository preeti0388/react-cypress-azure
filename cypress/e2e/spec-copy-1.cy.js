describe('JSONPlaceholder API Tests', () => {
  it('should fetch and verify user data', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/users/1')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(1);
        expect(response.body.name).to.eq('Leanne Graham');
      });
  });

  it('should create a new post', () => {
    const postData = {
      title: 'Test Post',
      body: 'This is a test post',
      userId: 1
    };

    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', postData)
      .then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.title).to.eq('Test Post');
        expect(response.body.body).to.eq('This is a test post');
        expect(response.body.userId).to.eq(1);
      });
  });

  it('should fetch and verify todos data added', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.length).to.be.greaterThan(0);
      });
  });
  it('hell preeti', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.length).to.be.greaterThan(0);
      });
  });
});
