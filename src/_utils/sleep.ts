/* eslint-disable import/no-unused-modules */
export const sleep = (ms: number): Promise<void> =>
  new Promise((res) => {
    setTimeout(() => {
      res();
    }, ms);
  });
