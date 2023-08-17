const triangleRouter = require('express').Router()
const findTriangleType = require('../utils/triangle').findTriangleType

triangleRouter.get('/', async (request, response) => {
    try {    
        const sideA = parseInt(request.query.a)
        const sideB = parseInt(request.query.b)
        const sideC = parseInt(request.query.c)

        if (Number.isInteger(sideA) && Number.isInteger(sideB) && Number.isInteger(sideC))
        {
            const triangleType = findTriangleType(sideA, sideB, sideC)
            if (triangleType)
            {
                response.status(200).json(triangleType)
            }
            else {
                response.status(500).json({ error: 'server error' })
            }
        }
        else {
            response.status(400).json({ error: 'you must pass in three numbers (eg /triangle?a=10&b=10&c=10&d=10)'})
        }
            
    } catch (error) {
        response.status(500).json({ error: 'an error has occurred' })
    }
})

module.exports = triangleRouter