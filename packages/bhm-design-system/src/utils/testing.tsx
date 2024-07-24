import {
  render,
  renderHook,
  RenderHookOptions,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';

const AllTheProviders = ({ children }: { children?: React.ReactNode }) => (
  <div>{children}</div>
);

const customRender = (ui: JSX.Element, options?: RenderOptions): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options });

const customRenderHook = <T, J>(
  callback: (props: T) => J,
  options?: RenderHookOptions<unknown> | undefined
) =>
  // @ts-expect-error - doesn't matter for this
  renderHook<T, J>(callback, {
    wrapper: AllTheProviders,
    ...options,
  });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render, customRenderHook as renderHook };
