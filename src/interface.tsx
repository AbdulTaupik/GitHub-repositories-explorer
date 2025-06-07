export interface IUser {
    login: string;
    avatar_url: string;
}

export interface IRepo {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    stargazers_count: number;
}
