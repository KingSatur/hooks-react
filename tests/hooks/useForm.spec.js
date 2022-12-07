const { renderHook, act } = require("@testing-library/react");
const { useForm } = require("../../src/hook/useForm");

describe("UseForm tests", () => {
  const initialForm = {
    description: "",
    email: "",
  };

  it("Should set default value for form", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const {
      formState: {},
      onInputChange,
      onReset,
    } = result?.current;

    expect(result.current).toEqual({
      formState: initialForm,
      onInputChange: expect.any(Function),
      onReset: expect.any(Function),
    });
  });

  it("Should set change email control value for form", () => {
    const newEmail = "leomessi@mail.com";
    const { result } = renderHook(() => useForm(initialForm));

    const { onInputChange } = result?.current;

    act(() => {
      onInputChange({
        target: {
          name: "email",
          value: newEmail,
        },
      });
    });

    const {
      formState: { email },
    } = result?.current;

    expect(email).toBe(newEmail);
  });

  it("Should set change email control value for form and reset form value", () => {
    const newEmail = "leomessi@mail.com";
    const { result } = renderHook(() => useForm(initialForm));

    const { onInputChange, onReset } = result?.current;

    act(() => {
      onInputChange({
        target: {
          name: "email",
          value: newEmail,
        },
      });
    });

    const {
      formState: { email },
    } = result?.current;

    expect(email).toBe(newEmail);

    act(() => {
      onReset();
    });

    const { formState: resetedFormState } = result?.current;

    expect(resetedFormState).toEqual({
      description: "",
      email: "",
    });
  });
});
