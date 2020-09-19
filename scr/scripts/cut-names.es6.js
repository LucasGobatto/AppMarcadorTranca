import {silabas} from './silabas';
var _pj;
function _pj_snippets(container) {
  function in_es6(left, right) {
    if (right instanceof Array || typeof right === 'string') {
      return right.indexOf(left) > -1;
    } else {
      if (
        right instanceof Map ||
        right instanceof Set ||
        right instanceof WeakMap ||
        right instanceof WeakSet
      ) {
        return right.has(left);
      } else {
        return left in right;
      }
    }
  }
  container.in_es6 = in_es6;
  return container;
}
_pj = {};
_pj_snippets(_pj);

export function cutName(nome) {
  const L = silabas;
  const N = nome.toLowerCase();
  var V, palavra, silaba;
  V = ['a', 'e', 'i', 'o', 'u'];
  silaba = '';
  palavra = [];
  if (_pj.in_es6(N[0], V)) {
    for (var i = 0, _pj_a = N.length; i < _pj_a; i += 1) {
      if (_pj.in_es6(silaba + N[i], L)) {
        silaba += N[i];
        if (i === N.length - 1) {
          palavra.push(silaba);
        }
      } else {
        if ((silaba + N[i]).length === 3 && !_pj.in_es6(silaba + N[i], L)) {
          if (_pj.in_es6(silaba[0], V) && _pj.in_es6(silaba[1] + N[i], L)) {
            palavra.push(silaba[0]);
            silaba = silaba[1] + N[i];
            if (i === N.length - 1) {
              palavra.push(silaba);
            }
          } else {
            if (_pj.in_es6(silaba[0], L) && !_pj.in_es6(silaba[1] + N[i], L)) {
              palavra.push(silaba);
              silaba = '';
              silaba += N[i];
              if (i === N.length - 1) {
                palavra.push(silaba);
              }
            }
          }
        } else {
          if ((silaba + N[i]).length === 4) {
            if (
              _pj.in_es6(silaba[0] + silaba[1], L) &&
              _pj.in_es6(silaba[2] + N[i], L)
            ) {
              palavra.push(silaba[0] + silaba[1]);
              silaba = silaba[2] + N[i];
              if (i === N.length - 1) {
                palavra.push(silaba);
              }
            } else {
              if (_pj.in_es6(silaba, L) && _pj.in_es6(N[i], L)) {
                palavra.push(silaba);
                silaba = N[i];
                if (i === N.length - 1) {
                  palavra.push(silaba);
                }
              }
            }
          } else {
            if ((silaba + N[i]).length === 5) {
              if (
                _pj.in_es6(silaba[0] + silaba[1] + silaba[2], L) &&
                _pj.in_es6(silaba[3] + N[i], L)
              ) {
                palavra.push(silaba[0] + silaba[1] + silaba[2]);
                silaba = silaba[3] + N[i];
                if (i === N.length - 1) {
                  palavra.push(silaba);
                }
              }
            } else {
              palavra.push(silaba);
              silaba = '';
              silaba += N[i];
            }
          }
        }
      }
    }
  } else {
    for (var i = 0, _pj_a = N.length; i < _pj_a; i += 1) {
      if (_pj.in_es6(silaba + N[i], L)) {
        silaba += N[i];
        if (i === N.length - 1) {
          palavra.push(silaba);
        }
      } else {
        if ((silaba + N[i]).length === 3 && !_pj.in_es6(silaba + N[i], L)) {
          if (_pj.in_es6(silaba[0], V) && _pj.in_es6(silaba[1] + N[i], L)) {
            palavra.push(silaba[0]);
            silaba = silaba[1] + N[i];
            if (i === N.length - 1) {
              palavra.push(silaba);
            }
          } else {
            if (_pj.in_es6(silaba[0], L) && !_pj.in_es6(silaba[1] + N[i], L)) {
              palavra.push(silaba);
              silaba = '';
              silaba += N[i];
              if (i === N.length - 1) {
                palavra.push(silaba);
              }
            }
          }
        } else {
          if ((silaba + N[i]).length === 4) {
            if (i < N.length - 2) {
              if (
                _pj.in_es6(silaba, L) &&
                _pj.in_es6(N[i] + N[i + 1] + N[i + 2], L)
              ) {
                palavra.push(silaba);
                silaba = N[i];
              } else {
                if (
                  _pj.in_es6(silaba[0] + silaba[1], L) &&
                  _pj.in_es6(silaba[2] + N[i], L)
                ) {
                  palavra.push(silaba[0] + silaba[1]);
                  silaba = silaba[2] + N[i];
                  if (i === N.length - 1) {
                    palavra.push(silaba);
                  }
                } else {
                  if (_pj.in_es6(silaba, L) && _pj.in_es6(N[i], L)) {
                    palavra.push(silaba);
                    silaba = N[i];
                    if (i === N.length - 1) {
                      palavra.push(silaba);
                    }
                  }
                }
              }
            } else {
              if (
                _pj.in_es6(silaba[0] + silaba[1], L) &&
                _pj.in_es6(silaba[2] + N[i], L)
              ) {
                palavra.push(silaba[0] + silaba[1]);
                silaba = silaba[2] + N[i];
                if (i === N.length - 1) {
                  palavra.push(silaba);
                }
              } else {
                if (_pj.in_es6(silaba, L) && _pj.in_es6(N[i], L)) {
                  palavra.push(silaba);
                  silaba = N[i];
                  if (i === N.length - 1) {
                    palavra.push(silaba);
                  }
                }
              }
            }
          } else {
            palavra.push(silaba);
            silaba = '';
            silaba += N[i];
            if (i === N.length - 1) {
              palavra.push(silaba);
            }
          }
        }
      }
    }
  }
  return palavra;
}
