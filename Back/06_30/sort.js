x = [1, 10, 2, 23, 3, 34, -1]
x.sort((a, b) => a - b)
console.log(x)

x = ['Leo', 'leonardo', 'Fébelim', 'natália']
x.sort((a, b) => a.localeCompare(b))
console.log(x)