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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/console.js":
/*!************************!*\
  !*** ./src/console.js ***!
  \************************/
/*! exports provided: default, success, error, warning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"success\", function() { return success; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"error\", function() { return error; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"warning\", function() { return warning; });\n/**\n * // Custom\n * import msg from 'path/to/console'\n *\n * // Types\n * import * as msg from 'path/to/console'\n *\n * // Custom and types\n * import msg, * as msgType from 'path/to/console'\n *\n * // Variables *\n * text-1 | required\n * text-2 | optional\n * color  | optional | hex or rgb\n *\n * // Usage\n *\n * // Custom\n * msg('text-1', 'text-2', color)\n *\n * // Types\n * msg.success('text-1', 'text-2')\n * msg.warning('text-1', 'text-2')\n * msg.error('text-1', 'text-2')\n *\n * // Custom and types\n * msg('text-1', 'text-2', color)\n * msgType.success('text-1', 'text-2')\n * msgType.warning('text-1', 'text-2')\n * msgType.error('text-1', 'text-2')\n */\nvar msg = function msg() {\n  var msg1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var msg2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var bg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#607d8b';\n  var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#fff';\n  var msg = '%c' + msg1 + '%c' + msg2;\n  var sty1 = 'background: ' + bg + '; color: ' + color + '; font-weight: bold; padding: 5px;';\n  var sty2 = 'background: #fafafa; color: #888; font-weight: bold; padding: 5px;';\n  console.log(msg, sty1, sty2);\n};\n\nvar _error = function _error() {\n  var msg1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var msg2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var msg = '%c' + msg1 + '%c' + msg2;\n  var sty1 = 'background: #ef5350; color: #fff; font-weight: bold; padding: 5px;';\n  var sty2 = 'background: #fafafa; color: #888; font-weight: bold; padding: 5px;';\n  console.log(msg, sty1, sty2);\n};\n\nvar _success = function _success() {\n  var msg1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var msg2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var msg = '%c' + msg1 + '%c' + msg2;\n  var sty1 = 'background: #4caf50; color: #fff; font-weight: bold; padding: 5px;';\n  var sty2 = 'background: #fafafa; color: #888; font-weight: bold; padding: 5px;';\n  console.log(msg, sty1, sty2);\n};\n\nvar _sarning = function _sarning() {\n  var msg1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var msg2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var msg = '%c' + msg1 + '%c' + msg2;\n  var sty1 = 'background: #ffc400; color: #fff; font-weight: bold; padding: 5px;';\n  var sty2 = 'background: #fafafa; color: #888; font-weight: bold; padding: 5px;';\n  console.log(msg, sty1, sty2);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (msg);\nvar success = _success;\nvar error = _error;\nvar warning = _sarning;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS5qcz8zOTU2Il0sIm5hbWVzIjpbIm1zZyIsIm1zZzEiLCJtc2cyIiwiYmciLCJjb2xvciIsInN0eTEiLCJzdHkyIiwiY29uc29sZSIsImxvZyIsIl9lcnJvciIsIl9zdWNjZXNzIiwiX3Nhcm5pbmciLCJzdWNjZXNzIiwiZXJyb3IiLCJ3YXJuaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBLElBQU1BLEdBQUcsR0FBRyxlQUtQO0FBQUEsTUFKSEMsSUFJRyx1RUFKSyxFQUlMO0FBQUEsTUFISEMsSUFHRyx1RUFISyxFQUdMO0FBQUEsTUFGSEMsRUFFRyx1RUFGSyxTQUVMO0FBQUEsTUFESEMsS0FDRyx1RUFESyxNQUNMO0FBQ0gsTUFBTUosR0FBRyxHQUFJLE9BQU9DLElBQVAsR0FBYyxJQUFkLEdBQXFCQyxJQUFsQztBQUNBLE1BQU1HLElBQUksR0FBRyxpQkFBaUJGLEVBQWpCLEdBQXNCLFdBQXRCLEdBQW9DQyxLQUFwQyxHQUE0QyxvQ0FBekQ7QUFDQSxNQUFNRSxJQUFJLEdBQUcsb0VBQWI7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQ0VSLEdBREYsRUFFRUssSUFGRixFQUdFQyxJQUhGO0FBS0QsQ0FmRDs7QUFpQkEsSUFBTUcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FHVjtBQUFBLE1BRkhSLElBRUcsdUVBRkksRUFFSjtBQUFBLE1BREhDLElBQ0csdUVBREksRUFDSjtBQUNILE1BQU1GLEdBQUcsR0FBSSxPQUFPQyxJQUFQLEdBQWMsSUFBZCxHQUFxQkMsSUFBbEM7QUFDQSxNQUFNRyxJQUFJLEdBQUcsb0VBQWI7QUFDQSxNQUFNQyxJQUFJLEdBQUcsb0VBQWI7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQ0VSLEdBREYsRUFFRUssSUFGRixFQUdFQyxJQUhGO0FBS0QsQ0FiRDs7QUFlQSxJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUdaO0FBQUEsTUFGSFQsSUFFRyx1RUFGSSxFQUVKO0FBQUEsTUFESEMsSUFDRyx1RUFESSxFQUNKO0FBQ0gsTUFBTUYsR0FBRyxHQUFJLE9BQU9DLElBQVAsR0FBYyxJQUFkLEdBQXFCQyxJQUFsQztBQUNBLE1BQU1HLElBQUksR0FBRyxvRUFBYjtBQUNBLE1BQU1DLElBQUksR0FBRyxvRUFBYjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FDRVIsR0FERixFQUVFSyxJQUZGLEVBR0VDLElBSEY7QUFLRCxDQWJEOztBQWVBLElBQU1LLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBR1o7QUFBQSxNQUZIVixJQUVHLHVFQUZJLEVBRUo7QUFBQSxNQURIQyxJQUNHLHVFQURJLEVBQ0o7QUFDSCxNQUFNRixHQUFHLEdBQUksT0FBT0MsSUFBUCxHQUFjLElBQWQsR0FBcUJDLElBQWxDO0FBQ0EsTUFBTUcsSUFBSSxHQUFHLG9FQUFiO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLG9FQUFiO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUNFUixHQURGLEVBRUVLLElBRkYsRUFHRUMsSUFIRjtBQUtELENBYkQ7O0FBZWVOLGtFQUFmO0FBQ08sSUFBUVksT0FBTyxHQUFJRixRQUFuQjtBQUNBLElBQVFHLEtBQUssR0FBTUosTUFBbkI7QUFDQSxJQUFRSyxPQUFPLEdBQUlILFFBQW5CIiwiZmlsZSI6Ii4vc3JjL2NvbnNvbGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIC8vIEN1c3RvbVxuICogaW1wb3J0IG1zZyBmcm9tICdwYXRoL3RvL2NvbnNvbGUnXG4gKlxuICogLy8gVHlwZXNcbiAqIGltcG9ydCAqIGFzIG1zZyBmcm9tICdwYXRoL3RvL2NvbnNvbGUnXG4gKlxuICogLy8gQ3VzdG9tIGFuZCB0eXBlc1xuICogaW1wb3J0IG1zZywgKiBhcyBtc2dUeXBlIGZyb20gJ3BhdGgvdG8vY29uc29sZSdcbiAqXG4gKiAvLyBWYXJpYWJsZXMgKlxuICogdGV4dC0xIHwgcmVxdWlyZWRcbiAqIHRleHQtMiB8IG9wdGlvbmFsXG4gKiBjb2xvciAgfCBvcHRpb25hbCB8IGhleCBvciByZ2JcbiAqXG4gKiAvLyBVc2FnZVxuICpcbiAqIC8vIEN1c3RvbVxuICogbXNnKCd0ZXh0LTEnLCAndGV4dC0yJywgY29sb3IpXG4gKlxuICogLy8gVHlwZXNcbiAqIG1zZy5zdWNjZXNzKCd0ZXh0LTEnLCAndGV4dC0yJylcbiAqIG1zZy53YXJuaW5nKCd0ZXh0LTEnLCAndGV4dC0yJylcbiAqIG1zZy5lcnJvcigndGV4dC0xJywgJ3RleHQtMicpXG4gKlxuICogLy8gQ3VzdG9tIGFuZCB0eXBlc1xuICogbXNnKCd0ZXh0LTEnLCAndGV4dC0yJywgY29sb3IpXG4gKiBtc2dUeXBlLnN1Y2Nlc3MoJ3RleHQtMScsICd0ZXh0LTInKVxuICogbXNnVHlwZS53YXJuaW5nKCd0ZXh0LTEnLCAndGV4dC0yJylcbiAqIG1zZ1R5cGUuZXJyb3IoJ3RleHQtMScsICd0ZXh0LTInKVxuICovXG5cbmNvbnN0IG1zZyA9IChcbiAgbXNnMSAgPSAnJyxcbiAgbXNnMiAgPSAnJyxcbiAgYmcgICAgPSAnIzYwN2Q4YicsXG4gIGNvbG9yID0gJyNmZmYnLFxuKSA9PiB7XG4gIGNvbnN0IG1zZyAgPSAnJWMnICsgbXNnMSArICclYycgKyBtc2cyXG4gIGNvbnN0IHN0eTEgPSAnYmFja2dyb3VuZDogJyArIGJnICsgJzsgY29sb3I6ICcgKyBjb2xvciArICc7IGZvbnQtd2VpZ2h0OiBib2xkOyBwYWRkaW5nOiA1cHg7J1xuICBjb25zdCBzdHkyID0gJ2JhY2tncm91bmQ6ICNmYWZhZmE7IGNvbG9yOiAjODg4OyBmb250LXdlaWdodDogYm9sZDsgcGFkZGluZzogNXB4OydcblxuICBjb25zb2xlLmxvZyhcbiAgICBtc2csXG4gICAgc3R5MSxcbiAgICBzdHkyXG4gICk7XG59XG5cbmNvbnN0IF9lcnJvciA9IChcbiAgbXNnMSA9ICcnLFxuICBtc2cyID0gJycsXG4pID0+IHtcbiAgY29uc3QgbXNnICA9ICclYycgKyBtc2cxICsgJyVjJyArIG1zZzJcbiAgY29uc3Qgc3R5MSA9ICdiYWNrZ3JvdW5kOiAjZWY1MzUwOyBjb2xvcjogI2ZmZjsgZm9udC13ZWlnaHQ6IGJvbGQ7IHBhZGRpbmc6IDVweDsnXG4gIGNvbnN0IHN0eTIgPSAnYmFja2dyb3VuZDogI2ZhZmFmYTsgY29sb3I6ICM4ODg7IGZvbnQtd2VpZ2h0OiBib2xkOyBwYWRkaW5nOiA1cHg7J1xuXG4gIGNvbnNvbGUubG9nKFxuICAgIG1zZyxcbiAgICBzdHkxLFxuICAgIHN0eTJcbiAgKTtcbn1cblxuY29uc3QgX3N1Y2Nlc3MgPSAoXG4gIG1zZzEgPSAnJyxcbiAgbXNnMiA9ICcnLFxuKSA9PiB7XG4gIGNvbnN0IG1zZyAgPSAnJWMnICsgbXNnMSArICclYycgKyBtc2cyXG4gIGNvbnN0IHN0eTEgPSAnYmFja2dyb3VuZDogIzRjYWY1MDsgY29sb3I6ICNmZmY7IGZvbnQtd2VpZ2h0OiBib2xkOyBwYWRkaW5nOiA1cHg7J1xuICBjb25zdCBzdHkyID0gJ2JhY2tncm91bmQ6ICNmYWZhZmE7IGNvbG9yOiAjODg4OyBmb250LXdlaWdodDogYm9sZDsgcGFkZGluZzogNXB4OydcblxuICBjb25zb2xlLmxvZyhcbiAgICBtc2csXG4gICAgc3R5MSxcbiAgICBzdHkyXG4gICk7XG59XG5cbmNvbnN0IF9zYXJuaW5nID0gKFxuICBtc2cxID0gJycsXG4gIG1zZzIgPSAnJyxcbikgPT4ge1xuICBjb25zdCBtc2cgID0gJyVjJyArIG1zZzEgKyAnJWMnICsgbXNnMlxuICBjb25zdCBzdHkxID0gJ2JhY2tncm91bmQ6ICNmZmM0MDA7IGNvbG9yOiAjZmZmOyBmb250LXdlaWdodDogYm9sZDsgcGFkZGluZzogNXB4OydcbiAgY29uc3Qgc3R5MiA9ICdiYWNrZ3JvdW5kOiAjZmFmYWZhOyBjb2xvcjogIzg4ODsgZm9udC13ZWlnaHQ6IGJvbGQ7IHBhZGRpbmc6IDVweDsnXG5cbiAgY29uc29sZS5sb2coXG4gICAgbXNnLFxuICAgIHN0eTEsXG4gICAgc3R5MlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtc2dcbmV4cG9ydCBjb25zdCAgIHN1Y2Nlc3MgID0gX3N1Y2Nlc3NcbmV4cG9ydCBjb25zdCAgIGVycm9yICAgID0gX2Vycm9yXG5leHBvcnQgY29uc3QgICB3YXJuaW5nICA9IF9zYXJuaW5nXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/console.js\n");

/***/ }),

/***/ "./src/proportional.js":
/*!*****************************!*\
  !*** ./src/proportional.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./console */ \"./src/console.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * @attribute proportional (shape, liquidOrStatic, maxHeight, minHeight)\n *   @param string   | rectangle/square | required\n *   @param string   | liquid/static    | required\n *   @param numeric  | #                | optional\n *   @param numeric  | #                | optional\n *\n * Example:\n *\n * <div proportional=\"rectangle, liquid, 400\"></div>\n *\n * Init\n *\n * new proportional().init()\n */\n\n\nvar proportional =\n/*#__PURE__*/\nfunction () {\n  function proportional() {\n    _classCallCheck(this, proportional);\n  }\n\n  _createClass(proportional, [{\n    key: \"getParams\",\n    value: function getParams(str) {\n      return str.replace(/\\s/g, '').split(',');\n    }\n  }, {\n    key: \"setItems\",\n    value: function setItems() {\n      var _this = this;\n\n      document.querySelectorAll('[proportional]').forEach(function ($item, i) {\n        var params = _this.getParams($item.getAttribute('proportional'));\n\n        var shape = params[0];\n        var liquidOrStatic = params[1] === 'static' ? 'height' : 'minHeight';\n        var maxHeight = params[2];\n        var minHeight = params[3];\n        var height = shape === 'rectangle' ? Math.round($item.offsetWidth / 2) : $item.offsetWidth;\n        $item.style[liquidOrStatic] = height + 'px';\n\n        if (typeof maxHeight !== 'undefined' && maxHeight !== '') {\n          $item.style.maxHeight = maxHeight + 'px';\n        }\n\n        if (typeof minHeight !== 'undefined' && minHeight !== '' && liquidOrStatic !== 'minHeight') {\n          $item.style.minHeight = minHeight + 'px';\n        }\n      });\n    }\n  }, {\n    key: \"proportionalAvailable\",\n    value: function proportionalAvailable() {\n      var _this2 = this;\n\n      var isValid = true;\n      document.querySelectorAll('[proportional]').forEach(function ($item, i) {\n        var params = _this2.getParams($item.getAttribute('proportional'));\n\n        var shape = params[0];\n        var liquidOrStatic = params[1];\n\n        if (typeof shape === 'undefined' || shape !== 'rectangle' && shape !== 'square') {\n          _console__WEBPACK_IMPORTED_MODULE_0__[\"error\"]('Proportional', 'Item ' + (i + 1) + ': Missing a valid shape');\n          isValid = false;\n        }\n\n        if (typeof liquidOrStatic === 'undefined' || liquidOrStatic === '' || liquidOrStatic !== 'liquid' && liquidOrStatic !== 'static') {\n          _console__WEBPACK_IMPORTED_MODULE_0__[\"error\"]('Proportional', 'Item ' + (i + 1) + ': Is this \"liquid\" or \"static\"?');\n          isValid = false;\n        }\n      });\n      return isValid;\n    }\n  }, {\n    key: \"process\",\n    value: function process() {\n      var _this3 = this;\n\n      var resizeTimer;\n      this.setItems();\n      window.addEventListener('load', function () {\n        _this3.setItems();\n      });\n      window.addEventListener('resize', function () {\n        clearTimeout(resizeTimer);\n        resizeTimer = setTimeout(function () {\n          _this3.setItems();\n        }, 250);\n      }, false);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.proportionalAvailable()) this.process();\n    }\n  }]);\n\n  return proportional;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (proportional);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJvcG9ydGlvbmFsLmpzPzhhNDkiXSwibmFtZXMiOlsicHJvcG9ydGlvbmFsIiwic3RyIiwicmVwbGFjZSIsInNwbGl0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIiRpdGVtIiwiaSIsInBhcmFtcyIsImdldFBhcmFtcyIsImdldEF0dHJpYnV0ZSIsInNoYXBlIiwibGlxdWlkT3JTdGF0aWMiLCJtYXhIZWlnaHQiLCJtaW5IZWlnaHQiLCJoZWlnaHQiLCJNYXRoIiwicm91bmQiLCJvZmZzZXRXaWR0aCIsInN0eWxlIiwiaXNWYWxpZCIsIm1zZyIsInJlc2l6ZVRpbWVyIiwic2V0SXRlbXMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInByb3BvcnRpb25hbEF2YWlsYWJsZSIsInByb2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTs7SUFFTUEsWTs7Ozs7Ozs7OzhCQUNNQyxHLEVBQUs7QUFDYixhQUFPQSxHQUFHLENBQUNDLE9BQUosQ0FBWSxLQUFaLEVBQWtCLEVBQWxCLEVBQXNCQyxLQUF0QixDQUE0QixHQUE1QixDQUFQO0FBQ0Q7OzsrQkFDVTtBQUFBOztBQUNUQyxjQUFRLENBQUNDLGdCQUFULENBQTBCLGdCQUExQixFQUE0Q0MsT0FBNUMsQ0FBb0QsVUFBQ0MsS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFDaEUsWUFBTUMsTUFBTSxHQUFZLEtBQUksQ0FBQ0MsU0FBTCxDQUFlSCxLQUFLLENBQUNJLFlBQU4sQ0FBbUIsY0FBbkIsQ0FBZixDQUF4Qjs7QUFDQSxZQUFNQyxLQUFLLEdBQWFILE1BQU0sQ0FBQyxDQUFELENBQTlCO0FBQ0EsWUFBTUksY0FBYyxHQUFLSixNQUFNLENBQUMsQ0FBRCxDQUFOLEtBQWMsUUFBZixHQUEyQixRQUEzQixHQUFzQyxXQUE5RDtBQUNBLFlBQU1LLFNBQVMsR0FBU0wsTUFBTSxDQUFDLENBQUQsQ0FBOUI7QUFDQSxZQUFNTSxTQUFTLEdBQVNOLE1BQU0sQ0FBQyxDQUFELENBQTlCO0FBQ0EsWUFBTU8sTUFBTSxHQUFhSixLQUFLLEtBQUssV0FBWCxHQUEwQkssSUFBSSxDQUFDQyxLQUFMLENBQVdYLEtBQUssQ0FBQ1ksV0FBTixHQUFvQixDQUEvQixDQUExQixHQUE4RFosS0FBSyxDQUFDWSxXQUE1RjtBQUVBWixhQUFLLENBQUNhLEtBQU4sQ0FBWVAsY0FBWixJQUE4QkcsTUFBTSxHQUFHLElBQXZDOztBQUVBLFlBQUksT0FBT0YsU0FBUCxLQUFxQixXQUFyQixJQUFvQ0EsU0FBUyxLQUFLLEVBQXRELEVBQXlEO0FBQ3ZEUCxlQUFLLENBQUNhLEtBQU4sQ0FBWU4sU0FBWixHQUF3QkEsU0FBUyxHQUFHLElBQXBDO0FBQ0Q7O0FBRUQsWUFBSSxPQUFPQyxTQUFQLEtBQXFCLFdBQXJCLElBQW9DQSxTQUFTLEtBQUssRUFBbEQsSUFBd0RGLGNBQWMsS0FBSyxXQUEvRSxFQUEyRjtBQUN6Rk4sZUFBSyxDQUFDYSxLQUFOLENBQVlMLFNBQVosR0FBd0JBLFNBQVMsR0FBRyxJQUFwQztBQUNEO0FBQ0YsT0FqQkQ7QUFrQkQ7Ozs0Q0FDdUI7QUFBQTs7QUFDdEIsVUFBSU0sT0FBTyxHQUFHLElBQWQ7QUFFQWpCLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsZ0JBQTFCLEVBQTRDQyxPQUE1QyxDQUFvRCxVQUFDQyxLQUFELEVBQVFDLENBQVIsRUFBYztBQUNoRSxZQUFNQyxNQUFNLEdBQUcsTUFBSSxDQUFDQyxTQUFMLENBQWVILEtBQUssQ0FBQ0ksWUFBTixDQUFtQixjQUFuQixDQUFmLENBQWY7O0FBQ0EsWUFBTUMsS0FBSyxHQUFJSCxNQUFNLENBQUMsQ0FBRCxDQUFyQjtBQUNBLFlBQU1JLGNBQWMsR0FBR0osTUFBTSxDQUFDLENBQUQsQ0FBN0I7O0FBRUEsWUFBSSxPQUFPRyxLQUFQLEtBQWlCLFdBQWpCLElBQWdDQSxLQUFLLEtBQUssV0FBVixJQUF5QkEsS0FBSyxLQUFLLFFBQXZFLEVBQWlGO0FBQy9FVSx3REFBQSxDQUFVLGNBQVYsRUFBMEIsV0FBV2QsQ0FBQyxHQUFDLENBQWIsSUFBa0IseUJBQTVDO0FBQ0FhLGlCQUFPLEdBQUcsS0FBVjtBQUNEOztBQUVELFlBQUksT0FBT1IsY0FBUCxLQUEwQixXQUExQixJQUF5Q0EsY0FBYyxLQUFLLEVBQTVELElBQWtFQSxjQUFjLEtBQUssUUFBbkIsSUFBK0JBLGNBQWMsS0FBSyxRQUF4SCxFQUFrSTtBQUNoSVMsd0RBQUEsQ0FBVSxjQUFWLEVBQTBCLFdBQVdkLENBQUMsR0FBQyxDQUFiLElBQWtCLGlDQUE1QztBQUNBYSxpQkFBTyxHQUFHLEtBQVY7QUFDRDtBQUNGLE9BZEQ7QUFnQkEsYUFBT0EsT0FBUDtBQUNEOzs7OEJBQ1M7QUFBQTs7QUFDUixVQUFJRSxXQUFKO0FBRUEsV0FBS0MsUUFBTDtBQUNBQyxZQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQU07QUFDcEMsY0FBSSxDQUFDRixRQUFMO0FBQ0QsT0FGRDtBQUdBQyxZQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDdENDLG9CQUFZLENBQUNKLFdBQUQsQ0FBWjtBQUNBQSxtQkFBVyxHQUFHSyxVQUFVLENBQUMsWUFBTTtBQUM3QixnQkFBSSxDQUFDSixRQUFMO0FBQ0QsU0FGdUIsRUFFckIsR0FGcUIsQ0FBeEI7QUFHRCxPQUxELEVBS0csS0FMSDtBQU1EOzs7MkJBQ007QUFDTCxVQUFJLEtBQUtLLHFCQUFMLEVBQUosRUFDRSxLQUFLQyxPQUFMO0FBQ0g7Ozs7OztBQUdZOUIsMkVBQWYiLCJmaWxlIjoiLi9zcmMvcHJvcG9ydGlvbmFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXR0cmlidXRlIHByb3BvcnRpb25hbCAoc2hhcGUsIGxpcXVpZE9yU3RhdGljLCBtYXhIZWlnaHQsIG1pbkhlaWdodClcbiAqICAgQHBhcmFtIHN0cmluZyAgIHwgcmVjdGFuZ2xlL3NxdWFyZSB8IHJlcXVpcmVkXG4gKiAgIEBwYXJhbSBzdHJpbmcgICB8IGxpcXVpZC9zdGF0aWMgICAgfCByZXF1aXJlZFxuICogICBAcGFyYW0gbnVtZXJpYyAgfCAjICAgICAgICAgICAgICAgIHwgb3B0aW9uYWxcbiAqICAgQHBhcmFtIG51bWVyaWMgIHwgIyAgICAgICAgICAgICAgICB8IG9wdGlvbmFsXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiA8ZGl2IHByb3BvcnRpb25hbD1cInJlY3RhbmdsZSwgbGlxdWlkLCA0MDBcIj48L2Rpdj5cbiAqXG4gKiBJbml0XG4gKlxuICogbmV3IHByb3BvcnRpb25hbCgpLmluaXQoKVxuICovXG5cbmltcG9ydCAqIGFzIG1zZyBmcm9tICcuL2NvbnNvbGUnXG5cbmNsYXNzIHByb3BvcnRpb25hbCB7XG4gIGdldFBhcmFtcyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccy9nLCcnKS5zcGxpdCgnLCcpXG4gIH1cbiAgc2V0SXRlbXMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3Byb3BvcnRpb25hbF0nKS5mb3JFYWNoKCgkaXRlbSwgaSkgPT4ge1xuICAgICAgbGV0ICAgcGFyYW1zICAgICAgICAgID0gdGhpcy5nZXRQYXJhbXMoJGl0ZW0uZ2V0QXR0cmlidXRlKCdwcm9wb3J0aW9uYWwnKSlcbiAgICAgIGNvbnN0IHNoYXBlICAgICAgICAgICA9IHBhcmFtc1swXVxuICAgICAgY29uc3QgbGlxdWlkT3JTdGF0aWMgID0gKHBhcmFtc1sxXSA9PT0gJ3N0YXRpYycpID8gJ2hlaWdodCcgOiAnbWluSGVpZ2h0J1xuICAgICAgY29uc3QgbWF4SGVpZ2h0ICAgICAgID0gcGFyYW1zWzJdXG4gICAgICBjb25zdCBtaW5IZWlnaHQgICAgICAgPSBwYXJhbXNbM11cbiAgICAgIGxldCAgIGhlaWdodCAgICAgICAgICA9IChzaGFwZSA9PT0gJ3JlY3RhbmdsZScpID8gTWF0aC5yb3VuZCgkaXRlbS5vZmZzZXRXaWR0aCAvIDIpIDogJGl0ZW0ub2Zmc2V0V2lkdGhcblxuICAgICAgJGl0ZW0uc3R5bGVbbGlxdWlkT3JTdGF0aWNdID0gaGVpZ2h0ICsgJ3B4J1xuXG4gICAgICBpZiAodHlwZW9mIG1heEhlaWdodCAhPT0gJ3VuZGVmaW5lZCcgJiYgbWF4SGVpZ2h0ICE9PSAnJyl7XG4gICAgICAgICRpdGVtLnN0eWxlLm1heEhlaWdodCA9IG1heEhlaWdodCArICdweCdcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBtaW5IZWlnaHQgIT09ICd1bmRlZmluZWQnICYmIG1pbkhlaWdodCAhPT0gJycgJiYgbGlxdWlkT3JTdGF0aWMgIT09ICdtaW5IZWlnaHQnKXtcbiAgICAgICAgJGl0ZW0uc3R5bGUubWluSGVpZ2h0ID0gbWluSGVpZ2h0ICsgJ3B4J1xuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcHJvcG9ydGlvbmFsQXZhaWxhYmxlKCkge1xuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3Byb3BvcnRpb25hbF0nKS5mb3JFYWNoKCgkaXRlbSwgaSkgPT4ge1xuICAgICAgbGV0ICAgcGFyYW1zID0gdGhpcy5nZXRQYXJhbXMoJGl0ZW0uZ2V0QXR0cmlidXRlKCdwcm9wb3J0aW9uYWwnKSlcbiAgICAgIGNvbnN0IHNoYXBlICA9IHBhcmFtc1swXVxuICAgICAgY29uc3QgbGlxdWlkT3JTdGF0aWMgPSBwYXJhbXNbMV1cblxuICAgICAgaWYgKHR5cGVvZiBzaGFwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgc2hhcGUgIT09ICdyZWN0YW5nbGUnICYmIHNoYXBlICE9PSAnc3F1YXJlJykge1xuICAgICAgICBtc2cuZXJyb3IoJ1Byb3BvcnRpb25hbCcsICdJdGVtICcgKyAoaSsxKSArICc6IE1pc3NpbmcgYSB2YWxpZCBzaGFwZScpXG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxpcXVpZE9yU3RhdGljID09PSAndW5kZWZpbmVkJyB8fCBsaXF1aWRPclN0YXRpYyA9PT0gJycgfHwgbGlxdWlkT3JTdGF0aWMgIT09ICdsaXF1aWQnICYmIGxpcXVpZE9yU3RhdGljICE9PSAnc3RhdGljJykge1xuICAgICAgICBtc2cuZXJyb3IoJ1Byb3BvcnRpb25hbCcsICdJdGVtICcgKyAoaSsxKSArICc6IElzIHRoaXMgXCJsaXF1aWRcIiBvciBcInN0YXRpY1wiPycpXG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gaXNWYWxpZFxuICB9XG4gIHByb2Nlc3MoKSB7XG4gICAgbGV0IHJlc2l6ZVRpbWVyXG5cbiAgICB0aGlzLnNldEl0ZW1zKClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0SXRlbXMoKVxuICAgIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dChyZXNpemVUaW1lcilcbiAgICAgIHJlc2l6ZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0SXRlbXMoKVxuICAgICAgfSwgMjUwKVxuICAgIH0sIGZhbHNlKVxuICB9XG4gIGluaXQoKSB7XG4gICAgaWYgKHRoaXMucHJvcG9ydGlvbmFsQXZhaWxhYmxlKCkpXG4gICAgICB0aGlzLnByb2Nlc3MoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb3BvcnRpb25hbFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/proportional.js\n");

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./src/proportional.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/samuel.olvera/Documents/sites/htdocs/samline/proportional/src/proportional.js */"./src/proportional.js");


/***/ })

/******/ });