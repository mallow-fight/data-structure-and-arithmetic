const a = {
	c: 1,
	b: () => {
		'use strict';
		console.log(this.c);
	},
	d: function () {
		'use strict';
		console.log(this)
	}
}

a.b();
a.d();