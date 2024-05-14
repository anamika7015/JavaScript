// ES6 Module = An external files that contains reusable code
//   that can be imported into other javascript file .
// Write reusable code for many different apps.
// Can contains variable , classes, function ... and more
//  Introduced as part of ECMAScript 2015 update

import {PI, circumference, getArea, getVolume} from './mathUtil.js';
console.log(PI);

const circum = circumference(10);
const area = getArea(10);
const volume = getVolume(10);
console.log(`${circum.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);