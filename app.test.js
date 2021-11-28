import request from 'supertest';

import { app } from './app.js';

// beforeAll(done => {
//   done()
// })

describe('Scenario 1', () => {
  let userId = '';
  test('should return empty array and code 200', async () => {
    const response = await request(app).get('/person');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });
  test('should return new user and code 201', async () => {
    const response = await request(app)
      .post('/person')
      .send({
        name: 'Joey',
        age: 30,
        hobbies: ['dating', 'eating', 'howyoudoing'],
      });
    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Joey');
    expect(response.body.age).toBe(30);
    expect(response.body.hobbies).toEqual(['dating', 'eating', 'howyoudoing']);
    userId = response.body.id;
  });

  test('should return object by id and code 200', async () => {
    const response = await request(app).get(`/person/${userId}`);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Joey');
    expect(response.body.age).toBe(30);
    expect(response.body.hobbies).toEqual(['dating', 'eating', 'howyoudoing']);
  });

  test('should return updated object by id and code 200', async () => {
    const response = await request(app).put(`/person/${userId}`).send({
        name: 'Joey',
        age: 35,
        hobbies: ['dating', 'eating', 'howyoudoing']});
    expect(response.status).toBe(200);
    expect(response.body.age).toBe(35);
  });

  test('should code 204', async () => {
    const response = await request(app)
      .delete(`/person/${userId}`)
    expect(response.status).toBe(204);
  });

   test('should return error message code 404', async () => {
     const response = await request(app).get(`/person/${userId}`);
     expect(response.status).toBe(404);
     expect(response.text).toBe("This user doesn't exist");
   });

});

// afterAll((done) => {
//   app.close(done);
// });
