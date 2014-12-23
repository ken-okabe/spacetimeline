/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */

var _ = require('lodash');
var __ = require('lazy.js');
var ___ = require('./spacetimeline');

var moment = require('moment');

var timelineCapacity = moment.duration(40, 'seconds');

var ___a = ___(timelineCapacity);


var naturalF = function(n)
{
  return n;
};

var __Natural = __.generate(naturalF);

console.log(__Natural.take(10));


var interval = setInterval(function()
{
  ___a.appear(it.next());

}, 1000);

___a.compute(function()
{
  // log('x ' + x);
  log(___a.value(__('NOW')));

  log(___a.value(__('NOW').subtract(2, 'seconds')));
});