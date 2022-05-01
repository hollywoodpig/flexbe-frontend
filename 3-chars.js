const str = 'Flexbe. Frontend. Test. 1234567890.'

/**
 * Вначале строка разбивается на массив из символов
 * Далее из данного массива убираются символы, ASCII код которых не кратный 3  
 * Затем возвращается количество элементов данного массива
*/

const func = str => {
	return str.split('').filter(item => item.charCodeAt(0) % 3 === 0).length
}

console.log(func(str))
