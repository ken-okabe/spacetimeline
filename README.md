spacetimeline
=============

SpaceTimeLine FRP


https://github.com/kenokabe/spacetimeline

`npm install spacetimeline`

Also, some [facebook/react](https://github.com/facebook/react)+spacetimeline live-demo web-page.

http://kentutorialbook.github.io/demo/frp-redball-delay/index.html
https://github.com/kentutorialbook/kentutorialbook.github.io/tree/master/demo/frp-redball-delay

In this live-demo, my FRP library records all mouse-move event with a time-stamp.
Or all mouse-move event in 10 seconds duration. You can limit the time-line data size.

You can access the most recent event prior to any time-stamp, functionally.
In the live-demo, the code access the 1 seconds prior to the current time-stamp.

```js
var cursor = ___cursor.value(___('NOW').subtract(1, 'seconds'))
```

Then SVG virtual DOM element is passed to react function.

As a result, you can re-play 1 seconds past world that you behaved.

```js

(function() {

  var timelineCapacity = moment.duration(10, 'seconds');
  var ___cursor = ___(timelineCapacity);

  var onMouseMove = function(e) {
    var cursor = {
      x: e.clientX,
      y: e.clientY
    };

    ___cursor.appear(cursor);
  };

  var interval = setInterval(function() {
    ___cursor.appear(___cursor.value(___('NOW')));
  }, 10);

  ___cursor.compute(function() {

    //var cursor = ___cursor.value(___('NOW'));
    //var cursor = ___cursor.value(moment().subtract(3, 'seconds'));
    var cursor = ___cursor.value(___('NOW').subtract(1, 'seconds'))

    var dom = <svg height = "600" width = "600">
    <circle cx = {  cursor.x  }  cy = {  cursor.y  }  r = "20"   fill = "red" />
    </svg>;

    React.render(dom, document.body);

    });

    document.addEventListener("mousemove", onMouseMove);

    //====================================
    })();
    ```
