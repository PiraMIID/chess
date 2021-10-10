
import React from 'react'


import '@testing-library/jest-dom'

let matrix = Array.from((8,8));
let rookActual = new Rook('white', 2, 2);

describe('checking method of valid path', () => {
    expect(rookActual.isMoveCorrect(matrix,3,7)).toEqual(false)
})

