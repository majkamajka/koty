/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_style_scss__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_style_scss__);



$(function() {

// var firebase = require("firebase/app");
// require("firebase/auth");
// require("firebase/database");
//
//
// var config = {
//   apiKey: "AIzaSyBD5bKLZyfDUTHWSQrMdOU6Z6tsreYaak4",
//   authDomain: "koty-c79fd.firebaseapp.com",
//   databaseURL: "https://koty-c79fd.firebaseio.com",
//   projectId: "koty-c79fd",
//   storageBucket: "koty-c79fd.appspot.com",
//   messagingSenderId: "511321533732"
// };
//
// let fb = firebase.initializeApp(config);
// let db = fb.database();
//
// const resultsDiv = $("#results");
//
// db.ref().on("value", (snap) => {
//   let dbLength = snap.val().length; //check database length
//
//   for (var i = 1; i < dbLength; i++) {
//     db.ref(i).on("value", (snap)=>{
//         let name = snap.val().name;
//         let ageMths = snap.val().ageMonths;
//         let features = snap.val().features;
//         let desc = snap.val().desc.substring(0, 250) + "...";
//         let photoLink = snap.val().photo;
//         let sex = snap.val().sex;
//
//
//         let catContainer = $("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'></div>");
//         let catCard = $('<div class="tile cat-card"></div>');
//         let cardImgContainer = $('<div class="thumbnail"></div>')
//         let cardImg = $('<img class="cat-img">');
//         let cardName = $('<h1>');
//         let catSex = $('<i class="fa" aria-hidden="true"></i>')
//         let cardKeywords = $('<p id="keywords"></p>');
//         let cardDesc = $('<p class="cat-short-desc"></p');
//         let cardMoreBtn = $('<button class="button more">więcej</button>');
//         let cardPaypalBtn = snap.val().paypal;
//
//         $(cardImgContainer).append(cardImg);
//         $(cardImg).attr("src", photoLink);
//         $(cardName).text(name + " ");
//
//         if (sex === "m") {
//           $(catSex).addClass("fa-mars");
//         } else {
//           $(catSex).addClass("fa-venus");
//         };
//         $(cardName).append(catSex);
//         $(cardKeywords).text(features);
//         $(cardDesc).text(desc);
//
//         $(resultsDiv).append(catContainer);
//         $(catContainer).append(catCard);
//         $(catCard).append(cardImgContainer).append(cardName).append(cardKeywords).append(cardDesc).append(cardMoreBtn).append(cardPaypalBtn);
//
//     });
//   }
// });


 // main page & adoptions page

  const bannerX = $("#banner i"); //index.html banner
  // const filterClick = $(".filter-click");
  // const filterArrow = $(filterClick).find("i");
  // const filterMenu = $("#filter-menu");
  // const blackBlend = $(".black-blend");



  bannerX.on("click", () => {
    $(banner).addClass("hidden");
  });

  // filterClick.on("click", () => {
  //   //ogarnąć animacje! .slideToggle()
  //   $(filterMenu).toggleClass("hidden");
  //   $(blackBlend).toggleClass("hidden");
  //   if ($(filterArrow).hasClass("fa-arrow-circle-down")) {
  //     $(filterArrow).removeClass("fa-arrow-circle-down").addClass("fa-arrow-circle-up");
  //   } else {
  //     $(filterArrow).removeClass("fa-arrow-circle-up").addClass("fa-arrow-circle-down");
  //   }
  // });


  // cat profile page
  // $(document).ready(function() {
  //
  //   $(".galImg").click(function() {
  //     var image = $(this).attr("rel");
  //     $('#feature').fadeOut('slow');
  //     $('#feature').html('<img src="' + image + '"/>');
  //     $('#feature').fadeIn('slow');
  //   });
  // });








  //
  // let thumbnails = $('.photo-thumbnails .gallery-thumbnail');
  //
  //   $(thumbnails).click(function() {
  //       $('.photo-thumbnails .gallery-thumbnail').removeClass('current');
  //       $(this).addClass('current');
  //       var path = $(this).find('img').attr('src');
  //       $('#big-photo img').attr('src', path);
  //   });




});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "html {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\nhtml {\n  -webkit-tap-highlight-color: transparent; }\n\n[role=\"button\"], .button {\n  cursor: pointer; }\n\n.container {\n  margin-right: auto;\n  margin-left: auto; }\n\n@media (min-width: 768px) {\n  .container {\n    width: 750px; } }\n\n@media (min-width: 992px) {\n  .container {\n    width: 970px; } }\n\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px; } }\n\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 5px;\n  padding-right: 5px; }\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 5px;\n  padding-right: 5px; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left; }\n\n.col-xs-12 {\n  width: 100%; }\n\n.col-xs-11 {\n  width: 91.66666667%; }\n\n.col-xs-10 {\n  width: 83.33333333%; }\n\n.col-xs-9 {\n  width: 75%; }\n\n.col-xs-8 {\n  width: 66.66666667%; }\n\n.col-xs-7 {\n  width: 58.33333333%; }\n\n.col-xs-6 {\n  width: 50%; }\n\n.col-xs-5 {\n  width: 41.66666667%; }\n\n.col-xs-4 {\n  width: 33.33333333%; }\n\n.col-xs-3 {\n  width: 25%; }\n\n.col-xs-2 {\n  width: 16.66666667%; }\n\n.col-xs-1 {\n  width: 8.33333333%; }\n\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left; }\n  .col-sm-12 {\n    width: 100%; }\n  .col-sm-11 {\n    width: 91.66666667%; }\n  .col-sm-10 {\n    width: 83.33333333%; }\n  .col-sm-9 {\n    width: 75%; }\n  .col-sm-8 {\n    width: 66.66666667%; }\n  .col-sm-7 {\n    width: 58.33333333%; }\n  .col-sm-6 {\n    width: 50%; }\n  .col-sm-5 {\n    width: 41.66666667%; }\n  .col-sm-4 {\n    width: 33.33333333%; }\n  .col-sm-3 {\n    width: 25%; }\n  .col-sm-2 {\n    width: 16.66666667%; }\n  .col-sm-1 {\n    width: 8.33333333%; } }\n\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left; }\n  .col-md-12 {\n    width: 100%; }\n  .col-md-11 {\n    width: 91.66666667%; }\n  .col-md-10 {\n    width: 83.33333333%; }\n  .col-md-9 {\n    width: 75%; }\n  .col-md-8 {\n    width: 66.66666667%; }\n  .col-md-7 {\n    width: 58.33333333%; }\n  .col-md-6 {\n    width: 50%; }\n  .col-md-5 {\n    width: 41.66666667%; }\n  .col-md-4 {\n    width: 33.33333333%; }\n  .col-md-3 {\n    width: 25%; }\n  .col-md-2 {\n    width: 16.66666667%; }\n  .col-md-1 {\n    width: 8.33333333%; } }\n\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left; }\n  .col-lg-12 {\n    width: 100%; }\n  .col-lg-11 {\n    width: 91.66666667%; }\n  .col-lg-10 {\n    width: 83.33333333%; }\n  .col-lg-9 {\n    width: 75%; }\n  .col-lg-8 {\n    width: 66.66666667%; }\n  .col-lg-7 {\n    width: 58.33333333%; }\n  .col-lg-6 {\n    width: 50%; }\n  .col-lg-5 {\n    width: 41.66666667%; }\n  .col-lg-4 {\n    width: 33.33333333%; }\n  .col-lg-3 {\n    width: 25%; }\n  .col-lg-2 {\n    width: 16.66666667%; }\n  .col-lg-1 {\n    width: 8.33333333%; } }\n\n.clearfix:before,\n.clearfix:after,\n.container:before,\n.container:after,\n.container-fluid:before,\n.container-fluid:after,\n.row:before,\n.row:after {\n  content: \" \";\n  display: table; }\n\n.clearfix:after,\n.container:after,\n.container-fluid:after,\n.row:after {\n  clear: both; }\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.hide {\n  display: none !important; }\n\n.show {\n  display: block !important; }\n\n.invisible {\n  visibility: hidden; }\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.hidden {\n  display: none !important; }\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Montserrat', sans-serif;\n  text-align: justify;\n  font-size: 1.6rem; }\n\nhtml {\n  font-size: 62.5%; }\n\nbody {\n  color: #1F4E5F;\n  background-color: #F4E7D3; }\n\nh1 {\n  font-size: 2.6rem; }\n\nh2 {\n  font-size: 2.6rem; }\n\nh3 {\n  font-size: 1.8rem; }\n\np, ul {\n  line-height: 2.4rem; }\n\n.small-shadow, .button, header, .tile, #selection-bar, #filter-menu, #filter-menu-desktop, #cat-full-profile .photo-thumbnails .gallery-thumbnail, #cat-full-profile .cat-full-info div {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.shadow, .button:hover, #cat-full-profile #big-photo {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  z-index: 1; }\n\n.shadow-hover:hover, .tile:hover, #cat-full-profile .photo-thumbnails .gallery-thumbnail:hover, #cat-full-profile .cat-full-info div:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }\n\n.container.full-width {\n  width: 100%;\n  overflow: visible; }\n\n.blocker {\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  position: absolute;\n  z-index: 200;\n  transition: 0.5s; }\n\n.button {\n  background-color: rgba(249, 248, 237, 0.5);\n  border: 3px solid #1F4E5F;\n  color: #1F4E5F; }\n\n#banner {\n  padding-top: 5px;\n  padding-right: 5px;\n  text-align: right;\n  position: absolute;\n  z-index: 1000;\n  right: 10px;\n  top: 100px;\n  width: 200px;\n  height: 200px;\n  position: fixed;\n  background-image: url(\"./images/zoo_koty.jpg\");\n  background-size: contain;\n  background-repeat: no-repeat; }\n  #banner a {\n    position: absolute;\n    display: inline-block;\n    right: 20px;\n    height: 30px;\n    width: 160px;\n    bottom: 5px; }\n\n.heading {\n  border-bottom: 5px solid #0881A3;\n  margin-bottom: 10px;\n  display: inline-block; }\n\nul.square-list {\n  list-style-type: square;\n  list-style-position: inside; }\n\nheader {\n  padding: 10px;\n  width: 100%;\n  background-color: #1F4E5F;\n  color: #F4E7D3;\n  position: relative; }\n  header nav {\n    font-weight: bold;\n    height: 100px; }\n    header nav ul#menu-desktop {\n      float: right;\n      list-style: none;\n      display: none;\n      justify-content: flex-end;\n      flex-direction: row;\n      align-items: flex-end;\n      height: 100px; }\n      @media (min-width: 768px) {\n        header nav ul#menu-desktop {\n          display: flex; } }\n      header nav ul#menu-desktop a {\n        color: #F4E7D3; }\n      header nav ul#menu-desktop li {\n        display: inline-block;\n        margin-right: 1vw;\n        text-align: center;\n        border-bottom: 5px solid #1F4E5F;\n        padding: 5px; }\n        header nav ul#menu-desktop li:hover {\n          border-bottom: 5px solid #0881A3; }\n        header nav ul#menu-desktop li:active {\n          background-color: #0881A3;\n          color: #1F4E5F; }\n\n.hamburger {\n  position: fixed;\n  right: 0px;\n  top: 0;\n  z-index: 999; }\n  @media (min-width: 768px) {\n    .hamburger {\n      display: none; } }\n\n#menuToggle {\n  overflow: hidden;\n  position: absolute;\n  top: -15px;\n  right: -15px;\n  width: 300px;\n  padding-left: 300px;\n  float: right;\n  z-index: 1;\n  -webkit-user-select: none;\n  user-select: none; }\n  #menuToggle a {\n    text-decoration: none;\n    color: #1F4E5F;\n    transition: color 0.3s ease; }\n    #menuToggle a:hover {\n      color: #0881A3; }\n  #menuToggle input {\n    right: 20px;\n    top: 20px;\n    display: block;\n    width: 40px;\n    height: 32px;\n    position: absolute;\n    cursor: pointer;\n    opacity: 0.0;\n    /* hide this */\n    z-index: 2;\n    /* and place it over the hamburger */\n    -webkit-touch-callout: none; }\n  #menuToggle input:checked ~ span {\n    opacity: 1;\n    transform: rotate(45deg) translate(-2px, -1px);\n    background: #1F4E5F; }\n  #menuToggle input:checked ~ span:nth-last-child(3) {\n    opacity: 0;\n    transform: rotate(0deg) scale(0.2, 0.2); }\n  #menuToggle input:checked ~ span:nth-last-child(2) {\n    opacity: 1;\n    transform: rotate(-45deg) translate(0, -1px); }\n  #menuToggle input:checked ~ ul {\n    transform: scale(1, 1);\n    opacity: 1; }\n  #menuToggle span {\n    right: 55px;\n    top: 25px;\n    display: block;\n    width: 33px;\n    height: 4px;\n    margin-bottom: 5px;\n    position: relative;\n    background: #0881A3;\n    border-radius: 3px;\n    z-index: 1;\n    transform-origin: 4px 0px;\n    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease; }\n    #menuToggle span:first-child {\n      transform-origin: 0% 0%;\n      padding-top: 20px; }\n    #menuToggle span:nth-last-child(2) {\n      transform-origin: 0% 100%; }\n\n#menu {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  position: relative;\n  width: 300px;\n  top: -60px;\n  right: 274px;\n  padding: 20px;\n  padding-top: 100px;\n  background: #F9F8ED;\n  list-style-type: none;\n  -webkit-font-smoothing: antialiased;\n  transform-origin: 100% 0%;\n  transform: translate(100%, 0);\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1); }\n  #menu li {\n    padding: 10px 0;\n    font-size: 22px; }\n\n.logo {\n  height: 100px;\n  background-image: url(\"./images/catlogo.jpg\");\n  background-size: contain;\n  background-repeat: no-repeat;\n  display: inline-block; }\n\n.main {\n  background-image: url(\"./images/catpaws.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 50vh; }\n  .main section {\n    display: inline-block;\n    height: 100%;\n    background-color: rgba(244, 231, 211, 0.5);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column; }\n    .main section p {\n      text-align: center;\n      font-size: 2rem;\n      font-weight: bold;\n      text-shadow: 0px 0px 15px #F9F8ED;\n      margin-bottom: 20px; }\n    .main section h1, .main section h2, .main section h3 {\n      text-shadow: 0px 0px 15px #F9F8ED;\n      font-weight: bold; }\n    .main section h1 {\n      font-size: 2.8rem; }\n    .main section button {\n      font-size: 30px;\n      padding: 5px;\n      margin-top: 20px; }\n\n.flex {\n  display: flex; }\n\n.about {\n  margin-top: 30px; }\n  .about .row.flex {\n    flex-wrap: wrap; }\n    .about .row.flex div.flex {\n      padding: 10px; }\n      @media (min-width: 992px) {\n        .about .row.flex div.flex .tile.img {\n          background-image: url(\"./images/catpavement.jpg\"); }\n          .about .row.flex div.flex .tile.img .blend {\n            padding: 0 30px 0 30px; } }\n\n.tile {\n  background-color: #F9F8ED;\n  padding: 20px;\n  width: 100%;\n  display: inline-block; }\n  .tile li {\n    text-align: left; }\n  .tile.img {\n    padding: 0;\n    background-size: cover;\n    float: right;\n    background-repeat: no-repeat;\n    background-position: center;\n    box-sizing: padding-box; }\n    .tile.img .blend {\n      padding-top: 30px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      height: 100%;\n      background-color: rgba(244, 231, 211, 0.6); }\n      .tile.img .blend p {\n        text-align: center;\n        font-weight: bold;\n        font-size: 1.8rem;\n        line-height: 3rem; }\n      .tile.img .blend button {\n        font-size: 2rem;\n        padding: 10px;\n        margin-top: 30px;\n        margin-bottom: 30px; }\n\n.adopt {\n  margin-top: 30px; }\n  .adopt .btn-wrapper {\n    display: flex;\n    justify-content: center; }\n  .adopt button {\n    font-size: 2rem;\n    padding: 10px;\n    margin-top: 30px;\n    margin-bottom: 30px; }\n  .adopt .row.flex {\n    flex-wrap: wrap; }\n    .adopt .row.flex div.flex {\n      padding: 10px; }\n    .adopt .row.flex .virtual-adopt li {\n      margin-bottom: 10px; }\n\n.slider {\n  order: -1; }\n  @media (min-width: 992px) {\n    .slider {\n      order: 0; } }\n\n#slider {\n  width: 100%;\n  background-image: url(\"./images/catslider.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center; }\n\n.another {\n  margin-top: 30px; }\n  .another .row.flex {\n    flex-wrap: wrap; }\n    .another .row.flex div.flex {\n      padding: 10px; }\n\n#contact {\n  margin-top: 30px; }\n  #contact .entrance-img {\n    display: none; }\n    @media (min-width: 992px) {\n      #contact .entrance-img {\n        display: flex; } }\n  #contact .row.flex {\n    flex-wrap: wrap; }\n  #contact img {\n    width: 100%; }\n\n.map {\n  padding: 10px; }\n\n#map {\n  width: 100%;\n  min-height: 300px; }\n\nfooter {\n  margin-top: 30px;\n  background-color: #1F4E5F;\n  color: #0881A3;\n  padding: 15px; }\n  footer ul {\n    list-style: none; }\n  footer li {\n    font-size: 1.2rem;\n    line-height: 1.6rem; }\n    footer li .fa {\n      font-size: 4rem; }\n  footer .social-media {\n    width: auto;\n    float: right; }\n    footer .social-media p {\n      margin-bottom: 20px;\n      padding-left: 20px; }\n    footer .social-media li {\n      display: block;\n      margin-left: 20px; }\n      @media (min-width: 768px) {\n        footer .social-media li {\n          display: inline; } }\n    footer .social-media a {\n      color: inherit; }\n\n#selection-bar {\n  background-color: #0881A3;\n  color: #F4E7D3;\n  padding: 10px; }\n  #selection-bar .sort-container {\n    float: right; }\n    #selection-bar .sort-container #sort {\n      display: inline-block;\n      float: right; }\n\n#filter-menu {\n  position: absolute;\n  color: #1F4E5F;\n  background-color: #F9F8ED;\n  top: 33px;\n  left: -10px;\n  width: 60vw;\n  padding: 10px;\n  z-index: 2; }\n  #filter-menu form {\n    font-size: 2rem;\n    line-height: 3.3rem; }\n    #filter-menu form span {\n      font-size: 2.2rem;\n      padding-left: 15px;\n      font-weight: bold; }\n    #filter-menu form input {\n      margin-left: 20px; }\n    #filter-menu form [type=\"submit\"] {\n      font-size: 2rem;\n      margin-top: 20px;\n      float: right;\n      padding: 10px;\n      margin-right: 20px; }\n\n@media (min-width: 992px) {\n  .filter-click {\n    display: none; } }\n\n.black-blend {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 100vh;\n  width: 100vw;\n  z-index: 1; }\n\n#filter-menu-desktop {\n  display: none;\n  color: #1F4E5F;\n  background-color: #F9F8ED; }\n  #filter-menu-desktop form {\n    font-size: 1.8rem;\n    line-height: 3.3rem; }\n    #filter-menu-desktop form span {\n      font-size: 2rem;\n      padding-left: 15px;\n      font-weight: bold; }\n    #filter-menu-desktop form input {\n      margin-left: 20px; }\n    #filter-menu-desktop form [type=\"submit\"] {\n      font-size: 2rem;\n      margin-top: 20px;\n      float: right;\n      padding: 10px;\n      margin-right: 20px;\n      margin-bottom: 20px; }\n  @media (min-width: 992px) {\n    #filter-menu-desktop {\n      display: block; } }\n\n#results {\n  padding-top: 10px;\n  display: flex;\n  flex-wrap: wrap; }\n  #results .tile {\n    padding: 10px;\n    height: 98%; }\n  #results .cat-card {\n    margin-bottom: 10px; }\n    @media (min-width: 768px) {\n      #results .cat-card .thumbnail {\n        height: 340px;\n        width: 340px;\n        overflow: hidden;\n        position: relative; } }\n    @media (min-width: 992px) {\n      #results .cat-card .thumbnail {\n        height: 236px;\n        width: 236px; } }\n    @media (min-width: 1200px) {\n      #results .cat-card .thumbnail {\n        height: 211px;\n        width: 211px; } }\n    #results .cat-card .cat-img {\n      width: 100%; }\n      @media (min-width: 768px) {\n        #results .cat-card .cat-img {\n          position: absolute;\n          left: 50%;\n          top: 50%;\n          height: 100%;\n          width: auto;\n          -webkit-transform: translate(-50%, -50%);\n          -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); } }\n    #results .cat-card p {\n      font-size: 1.4rem;\n      line-height: 1.9rem; }\n    #results .cat-card button {\n      padding: 5px 3px 5px 3px;\n      margin: 5px 10px 5px 10px; }\n      #results .cat-card button.more {\n        float: right; }\n\n@media (min-width: 768px) {\n  .thumbnail {\n    height: 340px;\n    width: 340px;\n    overflow: hidden;\n    position: relative; } }\n\n@media (min-width: 992px) {\n  .thumbnail {\n    height: 236px;\n    width: 236px;\n    overflow: hidden;\n    position: relative; } }\n\n@media (min-width: 1200px) {\n  .thumbnail {\n    height: 211px;\n    width: 211px;\n    overflow: hidden;\n    position: relative; } }\n\n/* cat full profile */\n#cat-full-profile {\n  margin-top: 10px; }\n  #cat-full-profile .photo-thumbnails {\n    margin-bottom: 20px; }\n    #cat-full-profile .photo-thumbnails .gallery-thumbnail {\n      display: inline-block;\n      background-color: #F9F8ED;\n      padding: 5px; }\n      #cat-full-profile .photo-thumbnails .gallery-thumbnail .cont {\n        overflow: hidden;\n        height: 100px;\n        width: 100px;\n        position: relative; }\n        #cat-full-profile .photo-thumbnails .gallery-thumbnail .cont img {\n          height: 100%;\n          width: auto; }\n          @media (min-width: 768px) {\n            #cat-full-profile .photo-thumbnails .gallery-thumbnail .cont img {\n              position: absolute;\n              left: 50%;\n              top: 50%;\n              height: 100%;\n              width: auto;\n              -webkit-transform: translate(-50%, -50%);\n              -ms-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); } }\n  #cat-full-profile #big-photo {\n    background-color: #F9F8ED;\n    padding: 10px; }\n    #cat-full-profile #big-photo img {\n      width: 100%; }\n  #cat-full-profile .cat-full-info {\n    padding: 10px; }\n    #cat-full-profile .cat-full-info div {\n      padding: 10px;\n      background-color: #F9F8ED;\n      padding-bottom: 30px;\n      margin-bottom: 20px; }\n      #cat-full-profile .cat-full-info div ol {\n        list-style-position: inside; }\n        #cat-full-profile .cat-full-info div ol li {\n          font-weight: bold;\n          padding-bottom: 20px; }\n          #cat-full-profile .cat-full-info div ol li form {\n            margin-top: 10px;\n            margin-left: 20px; }\n          #cat-full-profile .cat-full-info div ol li .button {\n            margin-left: 20px;\n            margin-top: 10px;\n            padding: 5px 10px; }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?-url!../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?-url!../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(0);


/***/ })
/******/ ]);