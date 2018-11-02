'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unwind = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _flatten = require('lodash/flatten');

var _flatten2 = _interopRequireDefault(_flatten);

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var unwind = exports.unwind = function unwind(array, field) {
  if ((0, _isArray2.default)(array)) {
    return (0, _flatten2.default)(array.map(function (input) {
      if ((0, _isArray2.default)(input[field])) {
        return input[field].map(function (i) {
          var output = _extends({}, input);
          output[field] = i;

          return output;
        });
      }
      return input;
    }));
  }
  return array;
};

exports.default = unwind;
