import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Initialized with defaultCount 0 and description - Testing counter component", () => {
  beforeEach(() => {
    render(
      <Counter defaultCount={0} description="Testing counter component" />
    );
  });

  it("default count shoul be 0", () => {
    expect(screen.getByText("Current count: 0")).toBeInTheDocument();
    expect(screen.getByText(/Testing counter component/)).toBeInTheDocument();
  });

  it("pressing + should update the count by +1", () => {
    fireEvent.click(screen.getByRole("button", { name: "+" }));
    expect(screen.getByText("Current count: 1")).toBeInTheDocument();
    expect(screen.getByText(/Testing counter component/)).toBeInTheDocument();
  });

  it("pressing - should update the count by -1", () => {
    fireEvent.click(screen.getByRole("button", { name: "-" }));
    expect(screen.getByText("Current count: 0")).toBeInTheDocument();
    expect(screen.getByText(/Testing counter component/)).toBeInTheDocument();
  });
});
