"use strict";

(function () {
  'use strict';

  var foo = function foo(bar) {
    return 'foo ' + bar;
  };

  var bar = function bar(foo) {
    return foo + ' bar';
  };

  alert(foo('bar'));
  alert(foo('bar'));
  alert(bar('foo'));
})(); //# sourceMappingURL=z-bundled.js.map
