
const findTriangleType = require('../utils/triangle').findTriangleType

describe('triangle type tests', () => {

    test('triangle is equilateral', () => {
        const result = findTriangleType(10, 10, 10)
        expect(result).toBe('equilateral')
    })

    test('triangle is isoceles', () => {
        const result = findTriangleType(15, 15, 12)
        expect(result).toBe('isoceles')
    })

    test('triangle is scalene', () => {
        const result = findTriangleType(10, 7, 12)
        expect(result).toBe('scalene')
    })

    test('not a triangle', () => {
        const result = findTriangleType(15, 1, 23)
        expect(result).toBe('not a triangle')
    })
})
