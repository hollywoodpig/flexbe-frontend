const input = [-2, 2, 4, 6, 8, 10, 3, 5, 7, 9, -1, -11]

/** Первое решение
 * Вначале идет получение массива чисел, кратных двум, а затем их сортировка в порядке убывания
 * Далее идет получение массива чисел, не вошедших в первый массив, а затем их сортировка в порядке возрастания
 * Затем функция возвращает первый массив, объединенный со вторым
*/

const func1 = arr => {
	const first = arr.filter(item => item % 2 === 0).sort((a, b) => b - a)
	const second = arr.filter(item => !first.includes(item)).sort((a, b) => a - b)

	return first.concat(second)
}

/** Второе решение
 * Идет сортировка массива со следующими критериями:
 * Если оба значения a и b кратны 2, то идет сортировка в порядке убывания
 * Если оба значения a и b не кратны 2, то идет сортировка в порядке возрастания
*/

const func2 = arr => {
	return arr.sort((a, b) => {
		if (a % 2 === 0 && b % 2 === 0) return b - a
		if (a % 2 != 0 && b % 2 != 0) return a - b
	})
}

/**
 * Мне кажется, второе решение нагляднее и быстрее, ибо совершается меньше операций над массивом
*/

console.log('Первое решение: ', func1(input))
console.log('Второе решение: ', func2(input))
