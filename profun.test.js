const reikna = require('./profun')

test ('reiknar rétt', () =>{
    expect(reikna(1,2)).toBe(3)
})

test ('reiknar vitlaust', () =>{
expect(reikna(1,2)).not.toBe(3)
})
