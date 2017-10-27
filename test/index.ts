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

function testRoots() {
  QUnit.module('Roots',() => {

    QUnit.test('secant', (assert:Assert) => {
      assert.ok(true);
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