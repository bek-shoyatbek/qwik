import { implicit$FirstArg } from '../../util/implicit_dollar';
import type { QRL } from '../../qrl/qrl.public';
import { createSignal2 as _createSignal2 } from './v2-signal';

export interface ReadonlySignal2<T> {
  readonly untrackedValue: T;
  readonly value: T;
}

export interface Signal2<T> extends ReadonlySignal2<T> {
  untrackedValue: T;
  value: T;
}

export const createSignal2: {
  <T>(): Signal2<T | undefined>;
  <T>(value: T): Signal2<T>;
} = _createSignal2;

export const createComputed2Qrl: <T>(qrl: QRL<() => T>) => ReadonlySignal2<T> = _createSignal2;

export const createComputed2$ = /*#__PURE__*/ implicit$FirstArg(createComputed2Qrl);
