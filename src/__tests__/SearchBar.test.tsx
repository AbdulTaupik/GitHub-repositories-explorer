import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";
import "@testing-library/jest-dom";

test("renders SearchBar component", () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText(
        /Search/i
    ) as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
});

test("handles user input correctly", () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText(
        /Search/i
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "john" } });
    expect(inputElement.value).toBe("john");
});
