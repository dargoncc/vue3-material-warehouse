const getType = (obj: any) => Object.prototype.toString.call(obj).slice(8, -1);

export function isArray(obj: any): obj is any[] {
  return getType(obj) === 'Array';
}
