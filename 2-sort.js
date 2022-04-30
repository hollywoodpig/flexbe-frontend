const input = [-2, 2, 4, 6, 8, 10, 3, 5, 7, 9, -1, -11]

const func1 = arr => {
	const first = arr.filter(item => item % 2 === 0).sort((a, b) => b - a) // получение массива чисел, кратных двум и их сортировка в порядке убывания
	const second = arr.filter(item => !first.includes(item)).sort((a, b) => a - b) // получение массива чисел, которые не вошли в первый массив и их сортировка в порядке возрастания 

	return first.concat(second) // объединение первого массива со вторым
}

const func2 = arr => {
	return arr.sort((a, b) => {
		if (a % 2 === 0 && b % 2 === 0) return b - a // если оба значения кратны 2, то идет сортировка в порядке убывания
		if (a % 2 != 0 && b % 2 != 0) return a - b // если оба значения не кратны 2, то идет сортировка в порядке возрастания
	})
}

console.log('Первое решение: ', func1(input))
console.log('Второе решение: ', func2(input)) // мне кажется, это красивее
