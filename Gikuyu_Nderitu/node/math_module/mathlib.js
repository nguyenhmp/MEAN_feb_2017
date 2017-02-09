module.exports = (function () {
	const Maths = function () {
		this.add = function (num1, num2) {
			return num1 + num2
		}
		this.multiply = function (num1, num2) {
			return num1 * num2
		}
		this.square = function (num) {
			return num*num
		}
		this.random = function (num1, num2) {
			return Math.floor(Math.random()*num2+num1)
		}
	}
	return Maths
}())
