# План разработки Task Manager Frontend

## Фаза 0: Подготовка проекта (30 мин)

### 0.1 Настройка окружения
- [x] Убедиться что Node.js установлен (v18+)
- [x] Убедиться что проект создан через Vite + React + TypeScript

### 0.2 Установка зависимостей
- [x] Установить Zustand для state management
- [x] Установить TanStack Query для серверного состояния
- [x] Установить React Router v6
- [x] Установить и настроить Tailwind CSS v4
- [x] Инициализировать shadcn/ui
- [x] Установить React Hook Form + Zod
- [x] Установить Axios
- [x] Установить Lucide React (иконки)
- [x] Установить Framer Motion (анимации)
- [x] Установить @dnd-kit (drag-n-drop для kanban)

### 0.3 Базовая структура
- [x] Создать структуру папок согласно README
- [x] Настроить path aliases в tsconfig.json (@/ → src/)
- [x] Создать .env и .env.example с VITE_API_URL
- [x] Настроить Prettier и ESLint

---

## Фаза 1: Типы и утилиты (1 час)

### 1.1 Типы
- [x] Создать `src/types/auth.types.ts`
  - User interface
  - LoginRequest, LoginResponse
  - RegisterRequest, RegisterResponse
  - AuthState
- [x] Создать `src/types/task.types.ts`
  - Task interface
  - TaskStatus enum (todo, in-progress, done)
  - TaskPriority enum (low, medium, high)
  - CreateTaskRequest, UpdateTaskRequest
- [x] Создать `src/types/api.types.ts`
  - ApiError interface
  - PaginatedResponse interface

### 1.2 Утилиты
- [x] Создать `src/lib/utils.ts` с cn() helper (classnames merge)
- [ ] Создать `src/lib/constants.ts` с константами приложения

---

## Фаза 2: API слой (1.5 часа)

### 2.1 Axios настройка
- [x] Создать `src/api/axios.ts`
  - Базовый instance с baseURL из env
  - Request interceptor для добавления Authorization header
  - Response interceptor для обработки 401 (logout)
  - Response interceptor для обработки ошибок

### 2.2 Auth API
- [x] Создать `src/api/auth.api.ts`
  - login(email, password)
  - register(email, username, password)
  - logout()
  - getCurrentUser() (опционально)
  - refreshToken() (если есть на бэке)

### 2.3 Tasks API
- [x] Создать `src/api/tasks.api.ts`
  - getTasks(filters, pagination)
  - getTaskById(id)
  - createTask(data)
  - updateTask(id, data)
  - deleteTask(id)

---

## Фаза 3: State Management (1.5 часа)

### 3.1 Auth Store (Zustand)
- [x] Создать `src/store/authStore.ts`
  - State: user, token, isAuthenticated, isLoading
  - Actions: setUser, setToken, logout, checkAuth
  - Persist: сохранение token в localStorage

### 3.2 UI Store (Zustand)
- [x] Создать `src/store/uiStore.ts`
  - State: theme (light/dark), sidebarOpen, activeModal
  - Actions: toggleTheme, toggleSidebar, openModal, closeModal
  - Persist: сохранение theme в localStorage

### 3.3 Filter Store (Zustand)
- [x] Создать `src/store/filterStore.ts`
  - State: status, priority, search, sortBy
  - Actions: setFilter, resetFilters
  - Синхронизация с URL query params

---

## Фаза 4: Базовые UI компоненты (2 часа)

### 4.1 shadcn/ui компоненты
- [x] Добавить Button (`npx shadcn@latest add button`)
- [x] Добавить Input (`npx shadcn@latest add input`)
- [x] Добавить Card (`npx shadcn@latest add card`)
- [x] Добавить Dialog (`npx shadcn@latest add dialog`)
- [x] Добавить Dropdown Menu (`npx shadcn@latest add dropdown-menu`)
- [x] Добавить Select (`npx shadcn@latest add select`)
- [x] Добавить Badge (`npx shadcn@latest add badge`)
- [x] Добавить Toast/Sonner (`npx shadcn@latest add sonner`)
- [x] Добавить Skeleton (`npx shadcn@latest add skeleton`)
- [x] Добавить Avatar (`npx shadcn@latest add avatar`)
- [x] Добавить Checkbox (`npx shadcn@latest add checkbox`)
- [x] Добавить Label (`npx shadcn@latest add label`)
- [x] Добавить Popover (`npx shadcn@latest add popover`)
- [x] Добавить Calendar (`npx shadcn@latest add calendar`)

---

## Фаза 5: Layout компоненты (2 часа)

### 5.1 Header
- [x] Создать `src/components/layout/Header.tsx`
  - Логотип слева
  - Поиск по центру (опционально)
  - Переключатель темы
  - User dropdown справа (профиль, logout)
  - Адаптивность: hamburger menu на мобильных

### 5.2 Sidebar
- [x] Создать `src/components/layout/Sidebar.tsx`
  - Навигационные ссылки (Dashboard, Tasks)
  - Иконки для каждого пункта
  - Активное состояние для текущей страницы
  - Collapsible на desktop
  - Скрыт на мобильных (через hamburger)

### 5.3 Mobile Navigation
- [ ] Создать `src/components/layout/MobileNav.tsx`
  - Bottom navigation bar
  - 3-4 основных пункта с иконками
  - Показывается только на мобильных

### 5.4 Main Layout
- [ ] Создать `src/components/layout/Layout.tsx`
  - Собрать Header + Sidebar + main content area
  - Outlet для вложенных роутов
  - Обработка состояния sidebar

---

## Фаза 6: Аутентификация (3 часа)

### 6.1 Hooks
- [ ] Создать `src/hooks/useAuth.ts`
  - Обёртка над authStore
  - login, register, logout функции
  - Интеграция с TanStack Query для API вызовов
  - Обработка loading и error states

### 6.2 Login Form
- [ ] Создать `src/components/auth/LoginForm.tsx`
  - Поля: email, password
  - Валидация через Zod schema
  - React Hook Form integration
  - Показ ошибок под полями
  - Показ серверных ошибок
  - Loading state на кнопке
  - Ссылка на регистрацию

### 6.3 Register Form
- [ ] Создать `src/components/auth/RegisterForm.tsx`
  - Поля: email, username, password, confirmPassword
  - Валидация: email формат, пароль мин 8 символов, пароли совпадают
  - React Hook Form integration
  - Показ ошибок
  - Loading state
  - Ссылка на вход

### 6.4 Protected Route
- [ ] Создать `src/components/auth/ProtectedRoute.tsx`
  - Проверка isAuthenticated из store
  - Редирект на /login если не авторизован
  - Показ loader пока проверяется auth
  - Outlet для вложенных роутов

### 6.5 Auth Pages
- [ ] Создать `src/pages/LoginPage.tsx`
  - Центрированная карточка с LoginForm
  - Редирект на dashboard если уже залогинен
- [ ] Создать `src/pages/RegisterPage.tsx`
  - Центрированная карточка с RegisterForm
  - Редирект на dashboard если уже залогинен

---

## Фаза 7: Задачи - базовый CRUD (4 часа)

### 7.1 Hooks
- [ ] Создать `src/hooks/useTasks.ts`
  - useQuery для получения списка задач
  - useQuery для получения одной задачи
  - useMutation для создания
  - useMutation для обновления
  - useMutation для удаления
  - Optimistic updates
  - Invalidation после мутаций
- [ ] Создать `src/hooks/useDebounce.ts`
  - Debounce для поиска (300ms)

### 7.2 Task Card
- [ ] Создать `src/components/tasks/TaskCard.tsx`
  - Отображение title, description (truncated)
  - Badge для статуса (цветной)
  - Badge для приоритета (цветной)
  - Due date с форматированием
  - Dropdown menu (edit, delete)
  - Hover эффект
  - Click → переход к деталям или открытие модалки

### 7.3 Task List
- [ ] Создать `src/components/tasks/TaskList.tsx`
  - Маппинг задач в TaskCard
  - Grid или list layout
  - Empty state компонент
  - Skeleton loading (несколько карточек)

### 7.4 Task Form
- [ ] Создать `src/components/tasks/TaskForm.tsx`
  - Поля: title, description, status, priority, dueDate
  - Date picker для dueDate
  - Select для status и priority
  - Валидация (title required)
  - Режим create и edit (через props)
  - Loading state

### 7.5 Task Filters
- [ ] Создать `src/components/tasks/TaskFilters.tsx`
  - Select для фильтра по статусу
  - Select для фильтра по приоритету
  - Input для текстового поиска (debounced)
  - Кнопка "Сбросить фильтры"
  - Адаптивность: collapsible на мобильных

### 7.6 Task Details
- [ ] Создать `src/components/tasks/TaskDetails.tsx`
  - Полное отображение задачи
  - Кнопки Edit и Delete
  - Возможно inline editing

---

## Фаза 8: Страницы задач (2 часа)

### 8.1 Tasks Page
- [ ] Создать `src/pages/TasksPage.tsx`
  - TaskFilters сверху
  - Переключатель List/Kanban view
  - TaskList или TaskBoard в зависимости от view
  - Кнопка "Создать задачу" → открывает модалку
  - Dialog с TaskForm для создания

### 8.2 Task Detail Page
- [ ] Создать `src/pages/TaskDetailPage.tsx`
  - Получение id из URL params
  - Загрузка задачи по id
  - TaskDetails компонент
  - Кнопка "Назад к списку"
  - 404 если задача не найдена

### 8.3 Dashboard Page
- [ ] Создать `src/pages/DashboardPage.tsx`
  - Приветствие пользователя
  - Статистика: всего задач, по статусам, по приоритетам
  - Последние/ближайшие задачи (мини-список)
  - Quick actions: создать задачу

### 8.4 Not Found Page
- [ ] Создать `src/pages/NotFoundPage.tsx`
  - 404 сообщение
  - Кнопка "На главную"

---

## Фаза 9: Kanban доска (3 часа)

### 9.1 Kanban Board
- [ ] Создать `src/components/tasks/TaskBoard.tsx`
  - Три колонки: To Do, In Progress, Done
  - DndContext из @dnd-kit
  - Droppable зоны для каждой колонки
  - Подсчёт задач в каждой колонке

### 9.2 Draggable Task Card
- [ ] Модифицировать TaskCard для поддержки drag
  - useDraggable hook
  - Визуальный feedback при перетаскивании
  - Overlay при drag

### 9.3 Drop handling
- [ ] Обработка onDragEnd
  - Определение новой колонки
  - Вызов updateTask с новым статусом
  - Optimistic update UI
  - Анимация перемещения (Framer Motion)

---

## Фаза 10: Роутинг (1 час)

### 10.1 Настройка роутера
- [ ] Настроить `src/App.tsx`
  - BrowserRouter
  - Routes согласно спецификации
  - Public routes: /login, /register
  - Protected routes внутри ProtectedRoute и Layout
  - Redirect / → /dashboard
  - Catch-all → NotFoundPage

### 10.2 Query Params для фильтров
- [ ] Синхронизация filterStore с URL
  - Чтение params при загрузке страницы
  - Обновление URL при изменении фильтров
  - useSearchParams из react-router

---

## Фаза 11: Темы и стили (1.5 часа)

### 11.1 Тёмная тема
- [ ] Настроить CSS variables в globals.css
  - Light theme variables
  - Dark theme variables (под .dark класс)
- [ ] ThemeProvider или использовать uiStore
- [ ] Добавить класс .dark на html element
- [ ] Переключатель темы в Header

### 11.2 Цвета статусов и приоритетов
- [ ] Создать utility классы или компоненты для статусов
- [ ] Создать utility классы или компоненты для приоритетов
- [ ] Применить в Badge компонентах

---

## Фаза 12: UX улучшения (2 часа)

### 12.1 Toast уведомления
- [ ] Настроить Toaster (Sonner) в App.tsx
- [ ] Добавить toast при успешном создании задачи
- [ ] Добавить toast при успешном обновлении
- [ ] Добавить toast при удалении
- [ ] Добавить toast при ошибках API

### 12.2 Confirmation Dialog
- [ ] Создать переиспользуемый ConfirmDialog
- [ ] Использовать при удалении задачи
- [ ] "Вы уверены?" + кнопки Cancel/Delete

### 12.3 Loading States
- [ ] Skeleton для списка задач
- [ ] Skeleton для деталей задачи
- [ ] Loading spinner на кнопках при submit
- [ ] Full-page loader при проверке auth

### 12.4 Error Handling
- [ ] Error Boundary компонент
- [ ] Fallback UI при ошибках
- [ ] Retry кнопка для failed requests

---

## Фаза 13: Адаптивность (1.5 часа)

### 13.1 Mobile
- [ ] Проверить все страницы на 320px-480px
- [ ] Hamburger menu вместо sidebar
- [ ] Bottom navigation
- [ ] Touch-friendly размеры кнопок (мин 44px)
- [ ] Swipe actions для задач (опционально)

### 13.2 Tablet
- [ ] Проверить на 768px-1024px
- [ ] Collapsible sidebar
- [ ] Grid адаптация для списка задач

### 13.3 Desktop
- [ ] Проверить на 1024px+
- [ ] Полный sidebar
- [ ] Оптимальная ширина контента

---

## Фаза 14: Финальная полировка (2 часа)

### 14.1 Accessibility
- [ ] Проверить семантику (header, main, nav, section)
- [ ] Добавить aria-labels где нужно
- [ ] Проверить keyboard navigation
- [ ] Focus trap в модалках
- [ ] Skip to content link

### 14.2 Performance
- [ ] Lazy loading для страниц (React.lazy + Suspense)
- [ ] Проверить bundle size
- [ ] Оптимизировать re-renders (React.memo где нужно)

### 14.3 Cleanup
- [ ] Удалить console.log
- [ ] Проверить TypeScript ошибки (strict mode)
- [ ] Запустить ESLint и исправить warnings
- [ ] Форматирование кода (Prettier)
- [ ] Проверить .env.example актуален

### 14.4 Тестирование
- [ ] Ручное тестирование всех flows
- [ ] Проверить edge cases (пустые списки, длинный текст, etc)
- [ ] Проверить работу без интернета / с медленным API

---

## Порядок выполнения (Summary)

```
Фаза 0  → Подготовка           ~30 мин
Фаза 1  → Типы и утилиты       ~1 час
Фаза 2  → API слой             ~1.5 часа
Фаза 3  → State Management     ~1.5 часа
Фаза 4  → UI компоненты        ~2 часа
Фаза 5  → Layout               ~2 часа
Фаза 6  → Аутентификация       ~3 часа
Фаза 7  → Tasks CRUD           ~4 часа
Фаза 8  → Страницы             ~2 часа
Фаза 9  → Kanban               ~3 часа
Фаза 10 → Роутинг              ~1 час
Фаза 11 → Темы                 ~1.5 часа
Фаза 12 → UX улучшения         ~2 часа
Фаза 13 → Адаптивность         ~1.5 часа
Фаза 14 → Полировка            ~2 часа
─────────────────────────────────────────
ИТОГО:                         ~28-30 часов
```

---

## Зависимости между фазами

```
Фаза 0 (Setup)
    ↓
Фаза 1 (Types) ←──────────────────┐
    ↓                             │
Фаза 2 (API) ←────────────────────┤
    ↓                             │
Фаза 3 (Stores) ←─────────────────┤
    ↓                             │
Фаза 4 (UI Components) ───────────┘
    ↓
Фаза 5 (Layout)
    ↓
┌───┴───┐
↓       ↓
Фаза 6  Фаза 7
(Auth)  (Tasks)
↓       ↓
└───┬───┘
    ↓
Фаза 8 (Pages)
    ↓
Фаза 9 (Kanban)
    ↓
Фаза 10 (Routing)
    ↓
Фаза 11 (Themes)
    ↓
Фаза 12 (UX)
    ↓
Фаза 13 (Responsive)
    ↓
Фаза 14 (Polish)
```

---

## Чеклист перед деплоем

- [ ] Все фичи из README реализованы
- [ ] Нет TypeScript ошибок
- [ ] Нет console errors в браузере
- [ ] Работает на мобильных устройствах
- [ ] Тёмная тема работает
- [ ] Auth flow полностью работает
- [ ] CRUD задач работает
- [ ] Kanban drag-n-drop работает
- [ ] Фильтры и поиск работают
- [ ] Loading states везде
- [ ] Error handling везде
- [ ] .env.example обновлён
