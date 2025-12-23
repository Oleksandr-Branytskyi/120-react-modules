import axios from "axios";
import type {
  Task,
  CreateTaskData,
  UpdateTaskData,
  SortOrder,
} from "../types/task";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const getTasks = async (search: string, SortOrder: SortOrder) => {
  const res = await axios.get<Task[]>("/tasks", {
    params: {
      search,
      orderBy: "completed",
      order: SortOrder,
    },
  });
  return res.data;
};

export const createTask = async (data: CreateTaskData) => {
  const res = await axios.post<Task>("/tasks", data);
  return res.data;
};

export const deleteTask = async (id: Task["id"]) => {
  await axios.delete(`/tasks/${id}`);
};

export const updateTask = async (id: Task["id"], data: UpdateTaskData) => {
  const res = await axios.put<Task>(`/tasks/${id}`, data);
  return res.data;
};
