/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */

"use strict";

var pureworld = require('pureworld');
var ___ = require('./spacetimeline');

//var timelineCapacity = moment.duration(40, 'seconds');
world = log('----');
//var ___a = ___(timelineCapacity);
var ___a = ___();

world = wrap(___a.compute(function()
{
  world = log('a: ' + ___a.value(___('NOW')));
}));

var interval = setInterval(function()
{
  world = wrap(___a.appear(___('NOW').toString()));
}, 1000);
