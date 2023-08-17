const findTriangleType = (sideA, sideB, sideC) => {
    try {
        let triangleType = 'unknown'

        if (sideA === sideB && sideA === sideC) {
            triangleType = 'equilateral'
        }
        else if (sideA === sideB || sideA === sideC || sideB == sideC){
            triangleType = 'isoceles'
        } else if (sideA + sideB < sideC || sideA + sideC < sideB || sideB + sideC < sideA) {
            triangleType = 'not a triangle'
        } else {
            triangleType = 'scalene'
        }

        return triangleType

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    findTriangleType
}