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



var interval = setInterval(function()
{
  //  console.log(___a.value(___('NOW')));
  //___a.appear(it.next());
  ___a.appear('yay');


}, 1000);



___a.compute(function()
{
  // log('x ' + x);
  console.log(___a.value(___('NOW')));

  console.log(___a.value(___('NOW').subtract(2, 'seconds')));
});