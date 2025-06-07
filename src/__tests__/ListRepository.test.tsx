import { render, screen } from "@testing-library/react";
import ListRepository from "../components/ListRepository";
import { IRepo } from "../interface";
import "@testing-library/jest-dom";

const mockRepos: IRepo[] = [
    {
        id: 1,
        name: "repo1",
        description: "This is repo 1",
        stargazers_count: 10,
        html_url: "url",
    },
    {
        id: 2,
        name: "repo2",
        description: "This is repo 2",
        stargazers_count: 20,
        html_url: "url",
    },
];

test("renders repository list correctly", () => {
    render(<ListRepository repo={mockRepos} />);

    expect(screen.getByText("repo1")).toBeInTheDocument();
    expect(screen.getByText("repo2")).toBeInTheDocument();

    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("20")).toBeInTheDocument();
});
