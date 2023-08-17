const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

describe('triangle controller tests', () => {

    test('valid query string', async() => {
        await api
            .get('/triangle?a=10&b=10&c=10')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('invalid query string', async() => {
        await api
            .get('/triangle?a=10&b=10&')
            .expect(400)
            .expect('Content-Type', /application\/json/)
    })

    test('unknown endpoint', async() => {
        await api
            .get('/apple?a=10')
            .expect(404)
            .expect('Content-Type', /application\/json/)
    })
})