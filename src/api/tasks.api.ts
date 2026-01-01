import type { CreateTaskRequest, Task } from '@/types/task.types';
import { api } from './axios';

export const createTask = async ({
  title,
  description,
  status,
  priority,
  dueDate,
}: CreateTaskRequest): Promise<void> => {
  await api.post('/tasks', { title, description, status, priority, dueDate });
};

export const getTasks = async (
  id: string,
  querySearch: string,
  status?: 'todo' | 'inProgress' | 'done',
  priority?: 'low' | 'medium' | 'high',
): Promise<Task[]> => {
  const response = await api.get('/tasks', {
    params: { id, querySearch, status, priority },
  });
  return response.data;
};

export const getTaskById = async (id: string): Promise<Task> => {
  const response = await api.get(`/tasks/${id}`);
  return response.data;
};

export const updateTask = async (
  id: string,
  data: Partial<Task>,
): Promise<Task> => {
  const response = await api.put(`/tasks/${id}`, data);
  return response.data;
};

export const deleteTask = async (id: string): Promise<void> => {
  await api.delete(`/tasks/${id}`);
};
