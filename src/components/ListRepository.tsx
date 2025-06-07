import { PiStarThin } from "react-icons/pi";
import { IRepo } from "../interface";
import { StarIcon } from "../icons/svg";

interface RepoProps {
    repo: IRepo[];
}

function ListRepository({ repo }: RepoProps) {
    return (
        <div>
            {repo?.map((repo: IRepo, j: number) => (
                <div
                    key={j}
                    className='sm:hover:scale-105 transition duration-300 ease-in-out bg-gray-50 rounded-md flex justify-between items-baseline p-3 my-2'>
                    <div>
                        <div className='font-semibold text-base'>
                            {repo.name}
                        </div>
                        <div className='text-base'>{repo.description}</div>
                    </div>
                    <div className='flex items-center text-base'>
                        <p className='mr-1'>{repo.stargazers_count || 0}</p>
                        <StarIcon />
                    </div>
                </div>
            ))}{" "}
            {/* {repo.length == 0 && (
                <p className='text-xs text-red-500 pl-0 sm:pl-2'>
                    repository is empty
                </p>
            )} */}
        </div>
    );
}

export default ListRepository;
