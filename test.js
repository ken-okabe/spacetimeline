/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */

"use strict";
// -- stdlib --
var pure = function(a)
{
  return function(_)
  {
    return a;
  };
};
// pure :: a -> IO a
var bind = function(m)
{
  return function(f)
  {
    return function(_)
    {
      return f(m())();
    };
  };
};
// bind :: IO a -> (a -> IO b) -> IO b
var exec = function(m)
{
  return m();
};
// exec :: IO a -> a
var wrap = function(f)
{
  return function(a)
  {
    return function(_)
    {
      return f(a);
    };
  };
};
// -- runtime --
Object.defineProperty(global, "world",
{
  set: exec
});

// wrap :: (a -> b) -> (a -> IO b)
var log = wrap(console.log.bind(console));


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
