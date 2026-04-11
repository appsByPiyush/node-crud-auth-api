const request = require('supertest');
const app = require('../app');

describe('Auth API', () => {

  it('should register user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        name: "Piyush",
        email: "test@example.com",
        password: "123456"
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.data.email).toBe("test@example.com");
  });

  it('should login user', async () => {
    // create user first
    await request(app).post('/api/users').send({
      name: "Piyush",
      email: "login@example.com",
      password: "123456"
    });

    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: "login@example.com",
        password: "123456"
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.accessToken).toBeDefined();
  });

  it('should fail with wrong password', async () => {
  const res = await request(app)
    .post('/api/auth/login')
    .send({
      email: 'user@test.com',
      password: 'wrongpass'
    });

  expect(res.statusCode).toBe(401);
});

});