import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders search bar", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Search/i);
    expect(inputElement).toBeInTheDocument();
});

test("renders title", () => {
    render(<App />);
    const titleElement = screen.getByText(/Search username from/i);
    expect(titleElement).toBeInTheDocument();
});
