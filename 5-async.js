/**
 * @param id {Number} - ID записи
 * @param callback {Function<Error, Object>} - Коллбек функция возвращающая результирующие данные
*/

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
 * @param data {Object} - Исходный объект
 * @result {Promise<Object>} - Полный объект с данными от сервера
*/

const getDataPromise = id => {
	return new Promise(resolve => {
		getData(id, (empty, time) => resolve(time))
	})
}

const mainFn = async data => {
	const newData = {
		...data,
		single: {
			id: data.single,
			data: await getDataPromise(data.single)
		},
		multiple: await Promise.all(data.multiple.map(async item => ({
			id: item,
			data: await getDataPromise(data.single)
		})))
	}

	return Promise.resolve(newData)
}

mainFn({
	id: 78,
	title: 'Some title',
	single: 12345,
	multiple: [56783, 46573, 13251]
}).then((result) => {
	console.log(result)
	/**
		{
			id: 78,
			title: 'Some title',
			single: { id: 12345, data: { utime: ... }},
			multiple: [{ id: 56783, data: { utime: ... }}, { id: 46573, data: { utime: ... }}, { id: 13251, data: {utime: ... }}]
		}
	 */
})
