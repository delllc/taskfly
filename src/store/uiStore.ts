import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Интерфейс для типизации состояния UI store
interface UIState {
  // Текущая тема приложения (светлая или темная)
  theme: 'light' | 'dark';
  // Состояние боковой панели (открыта/закрыта)
  sidebarOpen: boolean;
  // Активное модальное окно (null если нет активного)
  activeModal: string | null;

  // Действия для изменения состояния
  // Переключение темы между светлой и темной
  toggleTheme: () => void;
  // Переключение состояния боковой панели
  toggleSidebar: () => void;
  // Открытие модального окна с указанным именем
  openModal: (modalName: string) => void;
  // Закрытие активного модального окна
  closeModal: () => void;
}

// Создание UI store с использованием Zustand
// persist используется для сохранения темы в localStorage
const uiStore = create<UIState>()(
  persist(
    (set) => ({
      // Начальные значения состояния
      theme: 'light', // По умолчанию светлая тема
      sidebarOpen: false, // Боковая панель закрыта
      activeModal: null, // Нет активного модального окна

      // Действие для переключения темы
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),

      // Действие для переключения боковой панели
      toggleSidebar: () =>
        set((state) => ({
          sidebarOpen: !state.sidebarOpen,
        })),

      // Действие для открытия модального окна
      openModal: (modalName: string) =>
        set({
          activeModal: modalName,
        }),

      // Действие для закрытия модального окна
      closeModal: () =>
        set({
          activeModal: null,
        }),
    }),
    {
      // Настройки для persist
      name: 'ui-store', // Ключ для localStorage
      // Сохраняем только тему, остальные состояния не персистим
      partialize: (state) => ({ theme: state.theme }),
    },
  ),
);

// Экспортируем store для использования в компонентах
export default uiStore;
