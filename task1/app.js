function encode(str, n) {
    const key = String(n)

    return Array.from(str, (c, i) => {
       return c.charCodeAt(0) - 96 + Number(key[i % key.length])
    })

}


console.log(encode("yo", 54))