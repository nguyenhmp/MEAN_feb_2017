'use strict';

const $Dojo = (function(window) {
	'use strict';

	let Selected = function (ele) {
		this.ele = ele
	}

	let Dojo_Query = function (id) {
		if (id === window.document) return new Selected(window.document)
		let ele = window.document.getElementById(id)
		return new Selected(ele)
	}

	Selected.prototype.click = function (callback) {
		if(typeof callback === 'function')
			this.ele.addEventListener('click', callback)
		else
			throw new Error("I'm sorry, the parameter passed must be of type function")
	};

	Selected.prototype.hover = function (callback) {
		if(typeof callback === 'function'){
			this.ele.addEventListener('mouseover', callback)
			this.ele.addEventListener('mouseout', callback)
		}else
			throw new Error("I'm sorry, the parameter passed must be of type function")

	};

	Selected.prototype.ready = function (callback) {
		if (typeof callback === 'interactive') {
			if(this.ele.readyState === 'complete') callback()
		}
	};

	return Dojo_Query
}(window));

$Dojo('1').click(function () {
	console.log('hello');
})
