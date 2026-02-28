import { create } from 'zustand'

type CounterState = {
  count: number
  increase: () => void
  reset: () => void
}

/**
 * Zustand 전역 스토어 (가장 기본적인 형태)
 * - create() 안에 state + action 정의
 * - 사용하는 쪽에서 useCounterStore() 훅으로 읽고/변경
 */
export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}))

