/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */

var _ = require('lodash');
var __ = require('lazy.js');
var ___ = require('./spacetimeline');

var moment = require('moment');


var naturalF = function(n)
{
  return n;
};

var __Natural = __.generate(naturalF);
var __natural10 = __Natural.take(10);

console.log(__natural10.toArray());



var timelineCapacity = moment.duration(40, 'seconds');
console.log('----');
//var ___a = ___(timelineCapacity);
var ___a = ___();

var it = __Natural.getIterator();

var interval = setInterval(function()
{
  it.moveNext();
  ___a.appear(it.current());
}, 1000);

var ___b = ___a.map(function(x)
{
  return x * 2;
});


___a.compute(function()
{
  console.log('a: ' + ___a.value(___('NOW')));
});


___b.compute(function()
{
  console.log('b: ' + ___b.value(___('NOW')));

  //console.log(___b.value(___('NOW').subtract(2, 'seconds')));
});