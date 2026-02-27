import { useCounterStore } from '../store/counterStore.ts'

/**
 * 홈 페이지
 * - Zustand 스토어 사용 예시 (가장 많이 쓰는 패턴)
 *   const { count, increase } = useCounterStore()
 */
export function HomePage() {
  const { count, increase, reset } = useCounterStore()

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">홈 (Counter + Store 예시)</h1>

      <p className="text-sm text-slate-300">
        전역 스토어(Zustand)에서 count 상태를 읽어와서 여러 컴포넌트에서
        공유할 수 있습니다.
      </p>

      <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/80 p-4">
        <span className="text-lg font-semibold">
          count: <span className="text-sky-400">{count}</span>
        </span>
        <button
          type="button"
          onClick={increase}
          className="rounded-md bg-sky-500 px-3 py-1.5 text-sm font-medium text-slate-950 hover:bg-sky-400"
        >
          +1
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded-md border border-slate-600 px-3 py-1.5 text-sm hover:bg-slate-800"
        >
          리셋
        </button>
      </div>

      <p className="text-xs text-slate-400">
        이 값은 라우트가 바뀌어도 유지되며, 다른 페이지에서도 같은 훅으로
        접근할 수 있습니다.
      </p>
    </section>
  )
}

