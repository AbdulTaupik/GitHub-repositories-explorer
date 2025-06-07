import React, { useState, CSSProperties, useEffect } from "react";
import { IRepo, IUser } from "../interface";
import ListRepository from "./ListRepository";
import { DotLoader } from "react-spinners";
import { IoChevronDown } from "react-icons/io5";

interface UserListProps {
    user: IUser[];
}

export const ListUser = (user: UserListProps) => {
    const [selectUser, setSelectUser] = useState("");
    const [repos, setRepos] = useState<IRepo[]>([]);
    const [loadingRepos, setLoadingRepos] = useState(false);

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    const fetchRepos = async (username: string) => {
        setLoadingRepos(true);

        try {
            const res = await fetch(
                `https://api.github.com/users/${username}/repos`
            );
            if (res.status === 403) throw new Error("API rate limit exceeded");
            if (!res.ok) throw new Error("Failed to fetch repos");
            const data = await res.json();
            console.log("cek repo", data);
            setRepos(data);
        } catch (e: any) {
            setRepos([]);
        } finally {
            setLoadingRepos(false);
        }
    };

    const onSelectUsername = (username: string) => {
        if (username != "" && username == selectUser) {
            setRepos([]);
            setSelectUser("");
        } else {
            setSelectUser(username);
        }
    };

    useEffect(() => {
        if (selectUser) {
            fetchRepos(selectUser);
        }
    }, [selectUser]);

    return (
        <div className='bg-white rounded-b-3xl overflow-y-auto max-h-full sm:max-h-[60vh] transition duration-300 ease-in-out'>
            {user?.user.map((item: any, i: number) => (
                <div
                    key={i}
                    className='px-0 sm:px-8 mb-4 flex flex-col justify-center cursor-pointer '>
                    <div
                        className='w-full sm:px-2 transition duration-300 ease-in-out hover:font-medium rounded-md h-10 flex items-center justify-between'
                        onClick={() => onSelectUsername(item.login)}>
                        <div className='flex items-center'>
                            <img
                                src={item.avatar_url}
                                alt={item.login}
                                className='w-8 sm:w-9 rounded-full mr-3 border-2 border-gray-100'
                            />
                            {item.login}
                        </div>
                        <div>
                            <IoChevronDown
                                className={`${
                                    repos.length != 0 &&
                                    selectUser == item.login &&
                                    "rotate-[3.1rad]"
                                } text-gray-500 transition duration-300 ease-in-out`}
                                size={20}
                            />
                        </div>
                    </div>
                    <div className='pl-12'>
                        {selectUser == item.login && (
                            <ListRepository repo={repos} />
                        )}
                        {selectUser == item.login &&
                            selectUser != "" &&
                            !loadingRepos && (
                                <p className='text-xs text-red-500 pl-0 sm:pl-2'>
                                    repository is empty
                                </p>
                            )}
                    </div>
                </div>
            ))}
            {loadingRepos && (
                <div className='bg-transparent sm:bg-loading-full flex items-center justify-center absolute h-full w-full top-0 left-0 rounded-3xl opacity-60'>
                    <DotLoader
                        color={"gray"}
                        loading={true}
                        cssOverride={override}
                        size={50}
                        aria-label='Loading Spinner'
                        data-testid='loader'
                    />
                </div>
            )}
        </div>
    );
};
