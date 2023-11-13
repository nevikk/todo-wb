/* eslint-disable import/no-unused-modules */
export const getFloatWithComma = (value: number | string): string =>
  typeof value !== 'number' && typeof value !== 'string'
    ? '0'
    : `${value}`.replace(/\./, ',');
