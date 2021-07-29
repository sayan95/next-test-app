import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

it("default count shoul be 0", () => {
  render(<Counter defaultCount={0} description="Testing counter component" />);
  expect(screen.getByText("Current count: 0")).toBeInTheDocument();
  expect(screen.getByText(/Testing counter component/)).toBeInTheDocument();
});

it.todo("pressing + should update the count by +1");

it.todo("pressing - should update the count by -1");
