'use strict';

import test from 'ava';
import {isOdd} from './index';

test('zero', t => {
  t.false(isOdd(0));
})

test('odd', t => {
  t.true(isOdd(1));
});

test('even', t => {
  t.false(isOdd(2));
});

test('big odd', t => {
  t.true(isOdd(13579));
});

test('big even', t => {
  t.false(isOdd(24680));
});
