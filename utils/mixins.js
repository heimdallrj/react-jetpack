// Omit propery from an object
export function omit(obj, ...props) {
  if (!obj) return undefined;
  const _obj = { ...obj };
  props.forEach(function (prop) {
    delete _obj[prop];
  });
  return _obj;
}
