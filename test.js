/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */

var ___ = require('./spacetimeline');


//var timelineCapacity = moment.duration(40, 'seconds');
console.log('----');
//var ___a = ___(timelineCapacity);
var ___a = ___();

___a.compute(function()
{
  console.log('a: ' + ___a.value(___('NOW')));
});

var interval = setInterval(function()
{
  ___a.appear(___('NOW').toString());
}, 1000);
