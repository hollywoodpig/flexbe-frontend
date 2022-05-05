const str = 'Flexbe. Frontend. Test. 1234567890.'

/**
 * Вначале строка разбивается на массив из символов
 * Затем возвращается отфильтрованный массив из символов только с ASCII кодом кратным 3
 * И наконец возвращается количество элементов данного массива
*/

const func = str => {
	return str.split('').filter(item => item.charCodeAt(0) % 3 === 0).length
}

console.log(func(str))
