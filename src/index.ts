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

import {EPSILON} from '@bluemath/common'

export function secant(
  func : (x:number)=>number,
  x0 : number,
  tolerance = EPSILON,
  maxiter = 50,
  args = []
):number
{
  if(tolerance <= 0) {
    throw new Error('Too small tolerance');
  }
  if(maxiter <= 0) {
    throw new Error('Insufficient maxiter');
  }

  let x1;
  let x;
  if(x0 >= 0) {
    x1 = x0 * (1+1e-4) + 1e-4;
  } else {
    x1 = x0 * (1+1e-4) - 1e-4;
  }
  let y0 = func(x0,...args);
  let y1 = func(x1,...args);
  for(let i=0; i<maxiter; i++) {
    if(y1 === y0) {
      if(x1 !== x0) {
        console.warn(`Tolerance of ${x1-x0} reached`);
      }
      return (x1+x0)/2;
    } else {
      x = x1 - y1 * (x1-x0)/(y1-y0);
    }
    if(Math.abs(x-x1) < tolerance) {
      return x;
    }
    x0 = x1;
    y0 = y1;
    x1 = x;
    y1 = func(x1,...args);
  }
  throw new Error(`Failed to converge after ${maxiter} iterations`)
}

export function newtonraphson() {

}

export function bisect() {

}
