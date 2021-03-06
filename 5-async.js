const getData = (id, callback = () => {}) => {
	if (!id) {
		return callback(new Error('getData: ID not specified'))
	}
	setTimeout(() => {
		const data = {
			utime: Date.now()
		}
		callback(null, data)
	}, Math.random() * 1000)
}

/**
 * Оборачиваем функцию-сервис в Promise
*/

const getDataPromise = id => {
	return new Promise(resolve => {
		getData(id, (_, time) => resolve(time))
	})
}

/**
 * Преобразовываем переданный объект при помощи async / await
 * Как видно ниже, в поля data записываются значения от сервиса
 * Затем преобразованный объект передается в метод resolve
 */

const mainFn = async data => {
	const newData = {
		...data,
		single: {
			id: data.single,
			data: await getDataPromise(data.single)
		},
		multiple: await Promise.all(data.multiple.map(async item => ({
			id: item,
			data: await getDataPromise(item)
		})))
	}

	return Promise.resolve(newData)
}

mainFn({
	id: 78,
	title: 'Some title',
	single: 12345,
	multiple: [56783, 46573, 13251]
}).then(result => console.log(result))
