> __No longer maintained, would you be our new maintainer? Let us know at [mark@ulties.com](mailto:mark@ulties.com).__

![nglar - ngTouchmove](https://raw.githubusercontent.com/nglar/ngTouchmove/master/resources/logo.png)

A angular module to add directives for touch devices.

[![Build Status](https://travis-ci.org/nglar/ngTouchmove.svg?branch=master)](https://travis-ci.org/nglar/ngTouchmove)
[![StyleCI Status](https://styleci.io/repos/30239459/shield?style=flat)](https://styleci.io/repos/30239459)
[![Dependencies](https://img.shields.io/david/nglar/ngTouchmove.svg)](https://github.com/nglar/ngTouchmove)
[![Dev Dependencies](https://img.shields.io/david/dev/nglar/ngTouchmove.svg)](https://github.com/nglar/ngTouchmove)
[![License](https://img.shields.io/bower/l/ngtouchmove.svg)](https://github.com/nglar/ngTouchmove)

* [Info](#info)
* [Installing/Loading](#installingloading)
    * [Install using Bower](#install-using-bower)
    * [Install using NPM](#install-using-npm)
    * [Loading](#loading)
* [Usage](#usage)
* [Links](#links)
* [Tests](#tests)
* [Contributing](#contributing)
* [Security Vulnerabilities](#security-vulnerabilities)
* [License](#license)

## Info

Version: 1.0.1    
Author: Mark Topper [[Facebook](https://facebook.com/marktopper)] [[Github](https://github.com/marktopper)] [[Twitter](https://twitter.com/webman.io)]    
Website: [ulties.com](https://ulties.com)    
Email: [mark@ulties.com](mailto:mark@ulties.com)

## Installing/Loading

### Install using Bower

Install using bower:
```
bower install ngtouchmove --save
```

### Install using NPM

Install using npm:
```
npm install ngtouchmove --save
```

[Go to NPM page for this package.](https://www.npmjs.com/package/ngtouchmove)

### Loading

Load the file to you HTML header:
```
<script type="text/javascript" src="path/to/components/ngtouchmove/build/ngTouchmove.min.js"></script>
```

## Usage

You must include the ngTouchmove dependency on your angular module:
````
var app = angular.module("demoapp", ["ngTouchmove"]);
````

Then in your controller:

```
$scope.onTouchmove = function() {
   console.log('touchmove event called');
   console.log('Event', $scope.event);
}
```

Then in your HTML:
```
<div ng-touchmove="onTouchmove()"></div>
```

This will trigger whenever a touch device is touched and moving.

[__Get the whole ngTouch package.__](https://github.com/nglar/ngTouch)

## Links

The following is a list of libraries that extend ngTouchmove:

 * None yet

*Contact me at [mark@ulties.com](mailto:mark@ulties.com) to get yours added.*

The following is a list of libraries that requires by ngTouchmove:

 * [Angular](https://github.com/angular/angular.js):
HTML enhanced for web apps

The following is a list of alternatives for ngTouchmove:
* [ngTouch](https://github.com/nglar/ngTouch):
A angular module to add directives for touch devices.

## Tests

From the project directory, tests can be ran using `gulp test`

## Contributing

Thank you for considering contributing! The contribution guide can be found in the [contributions.md](https://github.com/nglar/ngTouchmove/blob/master/contributions.md).

## Security Vulnerabilities

If you discover a security vulnerability within ngTouch, please send an e-mail to Mark Topper at [mark@ulties.com](mailto:mark@ulties.com). All security vulnerabilities will be promptly addressed.

## License

Released under the MIT License - see [`license.txt`](https://github.com/nglar/ngTouchmove/blob/master/license) for details.
