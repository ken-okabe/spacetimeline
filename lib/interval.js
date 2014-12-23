/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */
'use strict';

var log = function(msg)
{
  console.log('interval:', msg);
};


var interval = function(t)
{
  var W = this.W;

  var f = function(tl)
  {
    var interval = setInterval(function()
    {
      // tl.val = true; //set tl.val on the specific event
      tl.next();
    }, t);

    tl.stop = function()
    {
      clearInterval(interval);

    };
  };

  var newObj = this;

  newObj.tl = function() //first src as a closure for lazyEval
  {
    log('the first tl called');

    //--
    var tlSeed = f;

    var custom = function()
    {
      var tl = {
        beacon: false,
        next: function()
        {
          return (this.beacon = !this.beacon);
        }
      };

      tlSeed(tl);

      return tl;
    };

    //--
    var tl = custom();

    return tl;

  };

  return newObj;
};

module.exports = interval;
