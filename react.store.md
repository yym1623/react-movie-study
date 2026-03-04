### A. Zustand

#### A-1. 기본 선언 예시

```ts
import { create } from 'zustand'

type CounterState = {
  count: number
  increase: () => void
  reset: () => void
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}))
```

#### A-2. 컴포넌트에서 사용 예시

```ts
import { useCounterStore } from '@/stores/counterStore'

export function HomePage() {
  const { count, increase, reset } = useCounterStore()

  return (
    <>
      <span>{count}</span>
      <button onClick={increase}>+1</button>
      <button onClick={reset}>reset</button>
    </>
  )
}
```


#### A-3. 주요 API / 패턴 (Zustand)

| **개념 / 함수**             | **설명** |
|---------------------------|----------|
| `create`                  | Zustand 스토어 생성. 제네릭으로 state 타입 지정 |
| `set` 인자                | `set(partial)` 또는 `set((state) => partial)` 형태로 상태 변경 |
| `get` (옵션)              | 미들웨어 등에서 현재 상태를 읽을 때 사용 |
| `useXxxStore()`           | 훅 형태로 상태 + 액션을 한 번에 가져옴 |
| `useXxxStore(selector)`   | 셀렉터 패턴. 필요한 조각만 구독해서 리렌더 최소화 |

> 구조: `src/stores/counterStore.ts`, `authStore.ts`, `uiStore.ts` 등으로 **도메인별 파일 분리** 후, 컴포넌트에서 필요한 훅만 import.

---

### B. React Context + useReducer (기본 내장 패턴)

#### B-1. 기본 선언 예시

```ts
import { createContext, useContext, useReducer } from 'react'

type CounterState = { count: number }
type CounterAction = { type: 'INC' } | { type: 'RESET' }

function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'INC':
      return { count: state.count + 1 }
    case 'RESET':
      return { count: 0 }
    default:
      return state
  }
}

const CounterContext = createContext<{
  state: CounterState
  dispatch: React.Dispatch<CounterAction>
} | null>(null)

export function CounterProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 })
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  )
}

export function useCounter() {
  const ctx = useContext(CounterContext)
  if (!ctx) throw new Error('CounterProvider 안에서만 사용 가능')
  return ctx
}
```

#### B-2. 컴포넌트에서 사용 예시

```ts
function SomeComponent() {
  const { state, dispatch } = useCounter()
  return (
    <>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: 'INC' })}>+1</button>
    </>
  )
}
```

#### B-3. 주요 API / 패턴 (Context + useReducer)

| **개념 / 함수**          | **설명** |
|-------------------------|----------|
| `createContext`         | 전역적으로 쓸 Context 생성 |
| `Context.Provider`      | 하위 트리에 값을 공급하는 Provider 컴포넌트 |
| `useContext`            | 가장 가까운 Provider의 값을 읽어오는 훅 |
| `useReducer`            | 상태 + 액션(리듀서) 패턴으로 state 관리 |
| `dispatch(action)`      | 리듀서에 액션을 전달해 상태 변경 |

**특징 요약**

| **장점** | **단점** |
|---------|----------|
| 리액트 내장 기능만으로 구현 가능 | Provider/Context/Reducer 코드 양이 많음 |
| 타입스크립트로 엄격한 액션 설계 가능 | 잘못 쓰면 Context 변경 시 전체 트리 리렌더 |

---

### C. Redux Toolkit (+ React Redux)

> 복잡한 비즈니스 로직/대규모 앱에서 여전히 많이 쓰는 패턴.

#### C-1. 기본 선언 예시 (slice + store)

```ts
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    reset: (state) => { state.value = 0 },
  },
})

export const { increment, reset } = counterSlice.actions

const store = configureStore({
  reducer: { counter: counterSlice.reducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
```

#### C-2. 컴포넌트에서 사용 예시

```ts
function Counter() {
  const value = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <>
      <span>{value}</span>
      <button onClick={() => dispatch(increment())}>+1</button>
    </>
  )
}
```

#### C-3. 주요 API / 패턴 (Redux Toolkit)

| **이름**           | **설명** |
|-------------------|----------|
| `createSlice`     | 리듀서 + 액션을 한 번에 선언 |
| `configureStore`  | DevTools / 미들웨어 등이 기본 설정된 스토어 생성 |
| `useSelector`     | 전역 상태 읽기 (React Redux) |
| `useDispatch`     | 액션 디스패치 (React Redux) |

---

### D. React Query (서버 상태 전용 스토어)

> 서버에서 가져오는 데이터(API 응답)는 Zustand/Redux 대신 **React Query**로 관리하는 경우가 많음.

#### D-1. 기본 선언 예시

```ts
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserList />
    </QueryClientProvider>
  )
}
```

#### D-2. 컴포넌트에서 사용 예시

```ts
import { useQuery } from '@tanstack/react-query'

function UserList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then(res => res.json()),
  })
  // ...
}
```

#### D-3. 주요 API / 패턴 (React Query)

| **이름**              | **설명** |
|----------------------|----------|
| `QueryClient`        | 쿼리 캐시/설정을 담는 클라이언트 인스턴스 |
| `QueryClientProvider`| React 트리에 QueryClient를 주입하는 Provider |
| `useQuery`           | GET 기반 데이터 패칭 및 캐싱 훅 |
| `useMutation`        | POST/PUT/DELETE 등 변경성 요청을 다루는 훅 |
| `queryKey`           | 캐시 키. 같은 키는 같은 데이터/캐시로 취급 |
| `queryFn`            | 실제 데이터를 가져오는 비동기 함수 |


--- 


#### 용도 구분

| **종류**   | **예시** | **추천 스토어** |
|-----------|----------|-----------------|
| 클라이언트 전역 상태 | UI 토글, 폼 임시 값, 인증 토큰 등 | Zustand / Context / Redux |
| 서버 상태  | 목록/상세 API 응답, 페이지네이션 등 | React Query |



#### 한 줄 요약

- **Zustand**: 가볍고 코드 적은 전역 상태 → 이 프로젝트에서 사용 중  
- **Context + useReducer**: 내장 기능만으로 충분할 때  
- **Redux Toolkit**: 대규모/복잡한 비즈니스 로직  
- **React Query**: 서버에서 가져오는 데이터 전용 스토어 (전역 상태와 역할 분리)
