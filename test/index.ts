/*

Copyright (C) 2017 Jayesh Salvi, Blue Math Software Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

/// <reference types="qunit"/>

import {secant} from '../src'
import {isequal} from '@bluemath/common'

function func_1(x:number) {
  return x*x-1;
}

function func_2(x:number) {
  return x*x-x-3;
}

function testRoots() {
  QUnit.module('Roots',() => {

    QUnit.test('secant', (assert:Assert) => {
      assert.ok(isequal(secant(func_1,0.5), 1));
      assert.ok(isequal(secant(func_1,-0.5), -1));
      assert.ok(isequal(secant(func_1,0.01), 1));
      assert.ok(isequal(secant(func_1,-0.01), -1));
      assert.ok(isequal(secant(func_1,1000), 1));
      assert.ok(isequal(secant(func_1,-1000), -1));

      assert.ok(isequal(secant(func_1,0), 1)); // due to hardcoded behavior of the algorithm

      let negroot2 = (1-Math.sqrt(13))/2;
      let posroot2 = (1+Math.sqrt(13))/2;
      assert.ok(isequal(secant(func_2, -1), negroot2));
      assert.ok(isequal(secant(func_2, 1), posroot2));
    });

  });

}

window.onload = () => {

  let qunitDiv = document.createElement('div');
  qunitDiv.setAttribute('id', 'qunit');
  document.body.appendChild(qunitDiv);

  let qunitFixtureDiv = document.createElement('div');
  qunitFixtureDiv.setAttribute('id', 'qunit-fixture');
  document.body.appendChild(qunitFixtureDiv);

  testRoots();

}