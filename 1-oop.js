class BaseClass {
	constructor() {
		this.test = (a, b) => {
			return 100 - a * -1 + b * -1
		}
	}
}

class MyClass extends BaseClass {
	test(a, b) {
		this.a = a
		this.b = b

		return 100 - this.a + this.b
	}
}

const m = new MyClass()

console.log(m.test(50, 40) === 110)
console.log(m.test(10, 90) === 20)

/**
 * Почему этот код плохой:
 * 1. Класс MyClass лишний, ибо дублируется метод test, который, к тому же, не может использоваться
 * 2. Аргументы метода test не обязательно делать свойствами класса
*/
