import request from 'supertest';
import server from '../server';

describe('GET /', () => {
  it('should return 200 OK', () => {
    return request(server).get('/').expect(200);
  });
});

describe('GET /configuration', () => {
  it('should return 200 OK', () => {
    return request(server).get('/configuration').expect(200);
  });

  it('should return a configuration object', () => {
    return request(server)
      .get('/configuration')
      .expect(200)
      .then(response => {
        expect(response.body).toHaveProperty('baseCost');
        expect(response.body).toHaveProperty('costPerKg');
        expect(response.body).toHaveProperty('costPerParcel');
      });
  });
});