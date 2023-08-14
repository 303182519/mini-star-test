definePlugin('@plugins/test', ['@plugins/alert2/index.js'], (function (index_js) { 'use strict';

	console.log("alert2", index_js.alert2);
	index_js.alert2("Test Alert");

}));
//# sourceMappingURL=index.js.map
