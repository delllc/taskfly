import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface filterStore {
  query: string;
  status?: 'todo' | 'inProgress' | 'done';
  priority?: 'low' | 'medium' | 'high';
  dueDate: Date | undefined;
}
// Создаем store для фильтров с состоянием и действиями
const filterStore = create<filterStore>()(
  persist(
    (set) => ({
      // Состояние фильтров
      query: '', // поиск по тексту
      status: undefined, // фильтр по статусу задачи
      priority: undefined, // фильтр по приоритету
      dueDate: undefined, // сортировка задач

      // Действия для управления фильтрами
      setFilter: (
        filters: Partial<Omit<filterStore, 'setFilter' | 'resetFilters'>>,
      ) => set((state) => ({ ...state, ...filters })),

      // Сброс всех фильтров к начальным значениям
      resetFilters: () =>
        set({
          query: '',
          status: undefined,
          priority: undefined,
          dueDate: undefined,
        }),
    }),
    {
      name: 'filter-store', // ключ для localStorage
      // Синхронизация с URL query params будет реализована отдельно через useEffect
    },
  ),
);
