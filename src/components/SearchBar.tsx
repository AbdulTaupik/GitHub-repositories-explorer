import React, { useState, CSSProperties } from "react";
import { ListUser } from "./ListUser";
import { IoSearchOutline } from "react-icons/io5";
import { IUser } from "../interface";
import { DotLoader } from "react-spinners";

const SearchBar: React.FC = () => {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState<IUser[]>([]);
    const [loadingUsers, setLoadingUsers] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isUsername, setIsUsername] = useState<string | null>(null);

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    const searchUsers = async (searchTerm: string) => {
        if (!searchTerm.trim()) {
            setUsers([]);
            return;
        }
        setLoadingUsers(true);
        setError(null);
        try {
            const res = await fetch(
                `https://api.github.com/search/users?q=${encodeURIComponent(
                    searchTerm
                )}&per_page=5`
            );
            if (res.status === 403) throw new Error("API rate limit exceeded");
            if (!res.ok) throw new Error("Failed to fetch users");
            const data = await res.json();
            setIsUsername(searchTerm);
            console.log("data", data);
            setUsers(data.items || []);
            if (data.total_count == 0) {
                setError("Username not found");
            }
        } catch (e: any) {
            setError(e.message);
            setUsers([]);
        } finally {
            setLoadingUsers(false);
        }
    };

    const updateSearch = (username: string) => {
        if (username === "") setUsers([]);
        if (error) setError("");
        if (username === "" && isUsername !== "") setIsUsername(null);

        setSearch(username);
    };

    return (
        <div className='rounded-full relative text-xl px-5 sm:px-0 '>
            <input
                type='text'
                name='search'
                placeholder='Search'
                className={`${
                    search && users.length > 0
                        ? "rounded-t-3xl rounded-b-none h-12 border-b-2 sm:border-none mb-5 sm:mb-0"
                        : "rounded-full h-12 border-2 sm:h-14"
                } w-full focus:outline-none border-gray-100  pb-1 sm:pb-0 px-5 sm:px-10 transition duration-300 ease-in-out `}
                onChange={(e) => updateSearch(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        searchUsers(search);
                    }
                }}
            />
            <div className='absolute top-3 right-9 sm:top-4 sm:right-6 cursor-pointer'>
                {loadingUsers ? (
                    <DotLoader
                        color={"gray"}
                        loading={true}
                        cssOverride={override}
                        size={24}
                        aria-label='Loading Spinner'
                        data-testid='loader'
                    />
                ) : (
                    <IoSearchOutline
                        size={24}
                        onClick={() => searchUsers(search)}
                    />
                )}
            </div>
            {isUsername && (
                <div className='bg-white px-0 sm:px-10 text-sm text-gray-500 pb-5'>
                    Showing user for : {isUsername}
                </div>
            )}

            {search && <ListUser user={users} />}
            {error && <p className='mt-2 text-sm text-red-300'>{error}</p>}
        </div>
    );
};

export default SearchBar;
