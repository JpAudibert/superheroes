/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

const MOCK_SUPERHERO_CREATE = {
  name: 'Bruce Wayne',
  nickname: 'Batman',
  power: 'Utility Belt',
  birthday: '26/05/1973',
  birthPlace: 'Gotham City',
};

beforeAll(() => {
  // eslint-disable-next-line no-console
  console.log('Testing Time!');
});

// eslint-disable-next-line func-names
describe('Testing Supeheroes CRUD', () => {
  test('Superheroes insertion', async () => {
    const res = await request(app).post('/superheroes').send(MOCK_SUPERHERO_CREATE);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('post');
  });
});
