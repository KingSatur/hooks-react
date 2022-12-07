import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hook/useFetch";
import { useCounter } from "../../src/hook/useCounter";

jest.mock("../../src/hook/useFetch", () => ({
  useFetch: jest.fn(),
}));

jest.mock("../../src/hook/useCounter", () => ({
  useCounter: jest.fn(),
}));

const incrementMock = jest.fn();

beforeEach(() => {
  useCounter.mockReturnValue({
    increment: incrementMock,
    counter: 1,
  });
});

describe("MultiplecustomHook tests", () => {
  it("Should show default component with loading", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHooks />);

    expect(screen.getByText("Loading...."));
    expect(screen.getByText("Next pokemon"));

    const nextButton = screen.getByRole("button", { name: "Next pokemon" });

    expect(nextButton.disabled).toBeTruthy();
  });

  it("Should show pokemon data", () => {
    useFetch.mockReturnValue({
      data: { name: "Pikachu" },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Pikachu"));
    expect(screen.getByText("Hello world"));

    const nextButton = screen.getByRole("button", { name: "Next pokemon" });

    expect(nextButton.disabled).toBeFalsy();
  });

  it("Should increment counter", () => {
    useFetch
      .mockReturnValueOnce({
        data: { name: "Pikachu" },
        isLoading: false,
        hasError: null,
      })
      .mockReturnValueOnce({
        data: { name: "Goku" },
        isLoading: false,
        hasError: null,
      });
    render(<MultipleCustomHooks />);

    expect(screen.getByText("Pikachu"));
    expect(screen.getByText("Hello world"));

    const nextButton = screen.getByRole("button", { name: "Next pokemon" });

    expect(nextButton.disabled).toBeFalsy();

    fireEvent.click(nextButton);

    expect(incrementMock).toHaveBeenCalled();
  });
});
