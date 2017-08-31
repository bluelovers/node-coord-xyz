/**
 * Created by user on 2017/9/1/001.
 */

export interface IXyz
{
	x?: number;
	y?: number;
	z?: number;
}

export interface IXyzInput extends IXyz
{
	0?: number;
	1?: number;
	2?: number;
}

export function toXyz(x: IXyzInput | number, y: number = 0, z: number = 0): IXyz
{
	let o = {
		x: 0,
		y: 0,
		z: 0,
	};

	if (Array.isArray(x))
	{
		[o.x, o.y, o.z] = x;
	}
	else if (typeof x == 'number')
	{
		[o.x, o.y, o.z] = [x, y, z];
	}
	else
	{
		for (let k in o)
		{
			if (x[k])
			{
				o[k] = x[k];
			}
		}
	}

	return o as IXyz;
}

export function toXy(x: IXyzInput | number, y: number = 0): IXyz
{
	let o = toXyz(x, y);

	delete o.z;

	return o;
}

export function xy(p1: IXyzInput | number, p2: IXyzInput | number = 0, scale: number = 1)
{
	p1 = toXyz(p1);
	p2 = toXyz(p2);

	p1.z = p2.z = 0;

	return xyz(p1, p2, scale);
}

export function xyz(p1: IXyzInput | number, p2: IXyzInput | number = 0, scale: number = 1)
{
	p1 = toXyz(p1) as IXyz;
	p2 = toXyz(p2) as IXyz;

	let x = Math.pow(p1.x - p2.x, 2);
	let y = Math.pow(p1.y - p2.y, 2);
	let z = Math.pow(p1.z - p2.z, 2);

	let d = Math.sqrt(x + y + z);

	return d * scale;
}

export default xyz;
