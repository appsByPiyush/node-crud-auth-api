const request = require('supertest');
const app = require('../app');

let token;

beforeAll(async () => {
  // create user & login
  await request(app).post('/api/users').send({
    name: "Test User",
    email: "user@test.com",
    password: "123456"
  });

  const res = await request(app)
    .post('/api/auth/login')
    .send({
      email: "user@test.com",
      password: "123456"
    });

  token = res.body.accessToken;
});

describe('User API', () => {

  it('should get all users', async () => {
    const res = await request(app)
      .get('/api/users')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
  });

});