import { fireEvent, render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/08-useReducer/useTodo";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

jest.mock("../../src/08-useReducer/useTodo");

const setUserMock = jest.fn();

describe("Loginpage tests", () => {
  it("Should show user data", () => {
    render(
      <UserContext.Provider value={{ user: "leo" }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const h2 = screen.getByLabelText("test-h2");
    expect(h2.innerHTML).toContain("leo");
  });

  it("Should set new user data", () => {
    render(
      <UserContext.Provider value={{ user: "leo", setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(setUserMock).toHaveBeenCalledWith({
      name: "matsi",
    });
  });
});
