# node-coord-xyz

```
let coord = require('coord-xyz');

let p1 = {
	x: 385.606,
	y: 242.086,
	z: -227.376,
};

let p2 = {
	x: 337.826,
	y: 247.886,
	z: -162.018,
};

console.log(coord.xy(p1, p2));
console.log(coord.xy(p1, [p2.x, p2.y, p2.z]));

console.log(coord.toXyz(p2.x, p2.y, p2.z));
console.log(coord.toXyz(0));

console.log(coord.xyz(p1, p2));
```
