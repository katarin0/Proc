"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shiftFunc = exports.replaceFunc = void 0;
var arr_ru = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
var arr_RU = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
var arr_en = 'abcdefghijklmnopqrstuvwxyz';
var arr_EN = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var replaceFunc = function replaceFunc(tmp) {
  var text = tmp[1].split('');
  var stringEncoded = '';
  var replacement = [];

  for (var i = 0; i < text.length; i++) {
    if (arr_ru.indexOf(text[i]) !== -1) {
      stringEncoded += arr_ru[32 - (arr_ru.indexOf(text[i]) + 1) + 1];
    } else if (arr_en.indexOf(text[i]) !== -1) {
      stringEncoded += arr_en[25 - (arr_en.indexOf(text[i]) + 1) + 1];
    } else if (arr_RU.indexOf(text[i]) !== -1) {
      stringEncoded += arr_RU[32 - (arr_RU.indexOf(text[i]) + 1) + 1];
    } else if (arr_EN.indexOf(text[i]) !== -1) {
      stringEncoded += arr_EN[25 - (arr_EN.indexOf(text[i]) + 1) + 1];
    }
  }

  var txt1 = stringEncoded.split('');

  for (var _i = 0; _i < text.length - 1; _i++) {
    var el = "[".concat(text[_i], "->").concat(txt1[_i], "]");
    replacement.push(el);
  }

  return {
    replacement: replacement,
    txt1: txt1
  };
};

exports.replaceFunc = replaceFunc;

var shiftFunc = function shiftFunc(tmp) {
  var text = tmp[1].split('');
  var strEncoded = '';
  var shift = +tmp[2];

  for (var i = 0; i < text.length; i++) {
    if (arr_ru.indexOf(text[i]) !== -1) {
      var index = arr_ru.indexOf(text[i]) + shift;
      var len = arr_ru.length;

      if (index < 0) {
        strEncoded += arr_ru[len + index];
      } else {
        strEncoded += arr_ru[index % len];
      }
    } else if (arr_en.indexOf(text[i]) !== -1) {
      var _index = arr_en.indexOf(text[i]) + shift;

      var _len = arr_en.length;

      if (_index < 0) {
        strEncoded += arr_en[_len + _index];
      } else {
        strEncoded += arr_en[_index % _len];
      }
    } else if (arr_RU.indexOf(text[i]) !== -1) {
      var _index2 = arr_RU.indexOf(text[i]) + shift;

      var _len2 = arr_RU.length;

      if (_index2 < 0) {
        strEncoded += arr_RU[_len2 + _index2];
      } else {
        strEncoded += arr_RU[_index2 % _len2];
      }
    } else if (arr_EN.indexOf(text[i]) !== -1) {
      var _index3 = arr_EN.indexOf(text[i]) + shift;

      var _len3 = arr_EN.length;

      if (_index3 < 0) {
        strEncoded += arr_EN[_len3 + _index3];
      } else {
        strEncoded += arr_EN[_index3 % _len3];
      }
    }
  }

  return {
    shift: shift,
    strEncoded: strEncoded
  };
};

exports.shiftFunc = shiftFunc;