spacetimeline
=============

SpaceTimeLine A conceptual FRP model library


https://github.com/kenokabe/spacetimeline

##Install

`npm install spacetimeline`

##CDN
 http://kentutorialbook.github.io/cdn/spacetimeline.js

##Live Demo Webpage
 [facebook/react](https://github.com/facebook/react)+spacetimeline live-demo web-page.

http://kentutorialbook.github.io/demo/frp-redball-delay/index.html

https://github.com/kentutorialbook/kentutorialbook.github.io/tree/master/demo/frp-redball-delay

In this live-demo, the FRP library records all mouse-move event with a time-stamp.
Or all mouse-move event in 10 seconds duration. You can limit the time-line data size.

You can access any stream data aligned on time-line, or to be precise,  the most recent event prior to any time-stamp, functionally.

In the live-demo, the code access the stream data on 1 seconds prior time-stamp to the current time-stamp.

```js
var cursor = ___cursor.value(___('NOW').subtract(1, 'seconds'))
```

*Please note ___cursor is the stream data appearing while time-line proceeding to the future.*

```js
___cursor.appear(cursor);
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
    ___cursor.appear(cursor); //the stream data appearing while time-line proceeding to the future
  };

  //----------------------------------------------------------------------------------
  //this logic is extra/option, but with this, the demo looks cooler,
  //try to comment out, and see how it goes

  var interval = setInterval(function() {
    ___cursor.appear(___cursor.value(___('NOW')));
  }, 10);

  //-----------------------------------------------------------------------------------

  ___cursor.compute(function() {  
    // here is the final part where pure logic meets our physical world
    // in lazy evaluation context, this corresponds to  `toArray()`

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
