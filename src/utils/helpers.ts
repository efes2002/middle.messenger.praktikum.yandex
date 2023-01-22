export type Indexed<T = any> = {
  [key in string]: T;
};

export function merge(lhs: Indexed, rhs: Indexed): Indexed {
  // eslint-disable-next-line no-restricted-syntax
  for (const p in rhs) {
    // eslint-disable-next-line no-prototype-builtins
    if (!rhs.hasOwnProperty(p)) {
      // eslint-disable-next-line no-continue
      continue;
    }
    try {
      if (rhs[p].constructor === Object) {
        // eslint-disable-next-line no-param-reassign
        rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
      } else {
        // eslint-disable-next-line no-param-reassign
        lhs[p] = rhs[p];
      }
    } catch (e) {
      // eslint-disable-next-line no-param-reassign
      lhs[p] = rhs[p];
    }
  }

  return lhs;
}

export function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  const result = path.split('.').reduceRight<Indexed>((acc, key) => ({
    [key]: acc,
  }), value as any);

  return merge(object as Indexed, result);
}

function isPlainObject(value: unknown): value is Indexed {
  return typeof value === 'object'
    && value !== null
    && value.constructor === Object
    && Object.prototype.toString.call(value) === '[object Object]';
}

function isArray(value: unknown): value is [] {
  return Array.isArray(value);
}

function isArrayOrObject(value: unknown): value is [] | Indexed {
  return isPlainObject(value) || isArray(value);
}

export function isEqual(lhs: Indexed, rhs: Indexed) {
  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
    return false;
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(lhs)) {
    const rightValue = rhs[key];
    if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
      if (isEqual(value, rightValue)) { /* empty */ }
      return false;
    }

    if (value !== rightValue) {
      return false;
    }
  }

  return true;
}
