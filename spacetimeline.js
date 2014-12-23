/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */
'use strict';

var log = function(msg)
{
  console.log('core:', msg);
};

var type = function(obj)
{

  return Object
    .prototype
    .toString
    .call(obj)
    .slice(8, -1);
};

//----------
var clone = require('clone');

var W = require('watchjs');

var moment = require('moment');

log('=== spacetimeline initialization ===');

var objTemplate = {};


log('functions loading');
//log(functionsDir);

if (typeof window === 'undefined')
{
  log('loading node-mode');

  var dir = __dirname + '/lib';
  log(dir);
  var files = require('fs').readdirSync(dir);
  log(files);

  files.map(function(file)
  {
    var moduleName = file.split('.')[0];
    objTemplate[moduleName] =
      require(dir + '/' + moduleName);

    log(moduleName + ' loaded');
  });


}
else
{
  log('loading timeline browserify-mode');
  objTemplate = require('./loadModulesFactoryBrowserify')(objTemplate);
}



//=======================
var spacetimeline = function(seq)
{
  log('======core called=======');
  var newObj = clone(objTemplate);

  newObj.W = W;
  /*  log('--seq--');
  log(seq);
  log('------');*/
  newObj.beacon = false;
  newObj.val = null;

  newObj.next = function()
  {
    return (newObj.beacon = !newObj.beacon);
  };

  if (!seq) //emply call,__()
  {
    newObj.type = 'null';

    log('seq type is ...');
    log(newObj.type);

    newObj.timelineCapacity = null;
    // 　　
    return newObj;
  }
  else if (type(seq) === 'Object')
  {　
    newObj.type = 'Object';

    log('seq type is ...');
    log(newObj.type);

    newObj.timelineCapacity = seq;
    // 　　
    return newObj;

  }

  else if (seq === 'NOW') //call __('NOW')
  {　
    return moment().utc();
  }

  else if (type(seq) === 'Array')
  {


  }

  else if (type(seq) === 'Function')
  {
    log('timeline custom Function, so will return timeline');
    // return newObj.generator(seq); //exteranl function generator

    var tlSeed = seq;
    newObj.tl = function() //first src as a closure for lazyEval
      {
        log('the first tl called default');

        //  log(tlSeed);
        //--
        var custom = function()
        {
          var newTl = {
            beacon: false,
            next: function()
            {
              return (this.beacon = !this.beacon);
            }
          };

          tlSeed(newTl);

          return newTl;
        };

        //--
        var newTl = custom();

        return newTl;


      };

    return newObj;


  }

};


module.exports = spacetimeline;