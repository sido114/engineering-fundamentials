import { render, screen, fireEvent} from "@testing-library/react";
import Counter from "../Counter";

test("increments count when button is clicked", () => {
    render(<Counter />);

    // 1. Find the button element
    // We use getByRole which is preferred for accessibility testing
    const button = screen.getByRole('button');

    // 2. Assert initial state
    expect(button).toHaveTextContent('count is 0');

    // 3. Simulate the user clicking the button
    fireEvent.click(button);

    // 4. Assert the state has changed
    expect(button).toHaveTextContent('count is 1');

    // Optional: Click again to ensure it continues incrementing
    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 2');
});