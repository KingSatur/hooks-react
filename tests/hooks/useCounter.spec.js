const { renderHook, act } = require("@testing-library/react");
const { useCounter } = require("../../src/hook/useCounter");

describe("UseCounter tests", () => {
  it("Should set default value for counter", () => {
    const { result } = renderHook(() => useCounter());

    const { counter, decrement, increment, reset } = result?.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  it("Should set default value for counter when specified", () => {
    const { result } = renderHook(() => useCounter(100));

    const { counter, decrement, increment, reset } = result?.current;

    expect(counter).toBe(100);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  it("Should increment counter", () => {
    const { result } = renderHook(() => useCounter(100));

    const { counter, decrement, increment, reset } = result?.current;

    expect(counter).toBe(100);

    act(() => {
      increment(15);
    });
    expect(result?.current?.counter).toBe(115);
  });

  it("Should decrement counter", () => {
    const { result } = renderHook(() => useCounter(100));

    const { counter, decrement, increment, reset } = result?.current;

    expect(counter).toBe(100);

    act(() => {
      decrement(15);
    });
    expect(result?.current?.counter).toBe(85);
  });

  it("Should reset counter", () => {
    const { result } = renderHook(() => useCounter(100));

    const { counter, decrement, increment, reset } = result?.current;

    expect(counter).toBe(100);

    act(() => {
      reset();
    });
    expect(result?.current?.counter).toBe(0);
  });
});
