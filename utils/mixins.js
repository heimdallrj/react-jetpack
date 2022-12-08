// Omit propery from an object
export function omit(obj, ...props) {
  const _obj = { ...obj };
  props.forEach(function (prop) {
    delete _obj[prop];
  });
  return _obj;
}
