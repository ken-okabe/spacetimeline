
var moment = require('moment');

var timelineCapacity = moment.duration(40, 'seconds');

var __a = __(timelineCapacity);


var _natural = _(natural);
var it = _natural.it();


var interval = setInterval(function()
{
  __a.appear(it.next());

}, 1000);

__a.compute(function()
{
  // log('x ' + x);
  log(__a.value(__('NOW')));

  log(__a.value(__('NOW').subtract(2, 'seconds')));
});
