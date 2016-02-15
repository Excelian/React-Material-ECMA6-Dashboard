

// babel transforms the tail calls into loops
'use strict';

exports.__esModule = true;
exports['default'] = mergeDiff;
function mergeDiffArr(_x, _x2, _x3, _x4, _x5, _x6) {
  var _again = true;

  _function: while (_again) {
    var arrA = _x,
        arrB = _x2,
        indexA = _x3,
        indexB = _x4,
        onRemove = _x5,
        accum = _x6;
    _again = false;

    var endA = indexA === arrA.length;
    var endB = indexB === arrB.length;
    // const keyA = arrA[indexA].key;
    // const keyB = arrB[indexB].key;
    if (endA && endB) {
      return accum;
    }

    if (endA) {
      accum.push(arrB[indexB]);
      _x = arrA;
      _x2 = arrB;
      _x3 = indexA;
      _x4 = indexB + 1;
      _x5 = onRemove;
      _x6 = accum;
      _again = true;
      endA = endB = undefined;
      continue _function;
    }

    if (endB) {
      var fill = onRemove(indexA, arrA[indexA]);
      if (fill != null) {
        accum.push(fill);
      }
      _x = arrA;
      _x2 = arrB;
      _x3 = indexA + 1;
      _x4 = indexB;
      _x5 = onRemove;
      _x6 = accum;
      _again = true;
      endA = endB = fill = undefined;
      continue _function;
    }

    if (arrA[indexA].key === arrB[indexB].key) {
      accum.push(arrB[indexB]);
      _x = arrA;
      _x2 = arrB;
      _x3 = indexA + 1;
      _x4 = indexB + 1;
      _x5 = onRemove;
      _x6 = accum;
      _again = true;
      endA = endB = fill = undefined;
      continue _function;
    }

    // TODO: key search code
    var found = false;
    for (var i = indexB; i < arrB.length; i++) {
      if (arrB[i].key === arrA[indexA].key) {
        found = true;
        break;
      }
    }
    if (!found) {
      var fill = onRemove(indexA, arrA[indexA]);
      if (fill != null) {
        accum.push(fill);
      }
      _x = arrA;
      _x2 = arrB;
      _x3 = indexA + 1;
      _x4 = indexB;
      _x5 = onRemove;
      _x6 = accum;
      _again = true;
      endA = endB = fill = found = i = fill = undefined;
      continue _function;
    }

    // key a != key b, key a (old) not found in new arr (arr b)
    _x = arrA;
    _x2 = arrB;
    _x3 = indexA + 1;
    _x4 = indexB;
    _x5 = onRemove;
    _x6 = accum;
    _again = true;
    endA = endB = fill = found = i = fill = undefined;
    continue _function;
  }
}

function mergeDiff(prev, next, onRemove) {
  return mergeDiffArr(prev, next, 0, 0, onRemove, []);
}

module.exports = exports['default'];