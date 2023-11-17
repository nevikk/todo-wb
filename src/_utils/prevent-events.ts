/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-unused-modules */
import { SyntheticEvent } from 'react';

export const preventDefaultEvent = (event: SyntheticEvent<any>): void =>
  event.preventDefault();

export const preventEventPropagation = (event: SyntheticEvent<any>): void =>
  event.stopPropagation();
