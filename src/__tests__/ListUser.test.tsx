import { render, screen } from "@testing-library/react";
import { ListUser } from "../components/ListUser";
import { IUser } from "../interface";
import "@testing-library/jest-dom";

const mockUsers: IUser[] = [
    { login: "john_doe", avatar_url: "url" },
    { login: "jane_doe", avatar_url: "url" },
];

test("renders user list correctly", () => {
    render(<ListUser user={mockUsers} />);

    expect(screen.getByText("john_doe")).toBeInTheDocument();
    expect(screen.getByText("jane_doe")).toBeInTheDocument();
});
