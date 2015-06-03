# ngTouchmove
A angular module to add directive `ng-touchmove`.

# How to use it
You must include the ngTouchmove dependency on your angular module:
````
var app = angular.module("demoapp", ["ngTouchmove"]);
````
Then in your HTML you can use:
````
<div ng-touchmove="someFunction($event)"></div>
````

# See also
- [ngTouch](https://github.com/marktopper/ngTouch)
- [ngTouchstart](https://github.com/marktopper/ngTouchstart)
- [ngTouchend](https://github.com/marktopper/ngTouchend)
