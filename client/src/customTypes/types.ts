import { ChangeEvent, ReactNode } from "react";

export type LoaderState = {
    pageLoading: boolean;
};

export type AxiosInterceptorProps = {
    children: ReactNode | undefined;
};

export type TaskItem = {
    id: string;
    title: string;
    description: string;
    status: string;
};

export type TaskListArrayState = {
    taskList: TaskItem[];
};

export type TaskCardProps = {
    task: TaskItem;
};

export type TaskFilterBarProps = {
    listName: string;
    onSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    searchText: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
    searchHandler: () => void;
};

export type TaskListProps = {
    taskList: TaskItem[];
};

export type TaskFormProps = {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
};
