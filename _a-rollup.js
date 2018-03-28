(function () {
	'use strict';

	const foo = bar => 'foo ' + bar;

	const bar = foo => foo + ' bar';

	alert(foo('bar'));

	alert(foo('bar'));

	alert(bar('foo'));

}());
//# sourceMappingURL=_a-rollup.js.map
