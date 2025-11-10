/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vitest" />
export {}

declare module 'vitest' {
  interface Assertion<T = any> {
    toHaveNoViolations(): T
  }
  interface AsymmetricMatchersContaining {
    toHaveNoViolations(): void
  }
}
