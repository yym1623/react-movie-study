import { useCounterStore } from '@/stores/counterStore.ts'

export default function AboutPage() {
  const count = useCounterStore((state) => state.count)

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">구조 설명</h1>

      <div className="space-y-2 text-sm text-slate-200">
        <p>
          <strong className="text-sky-300">1. Router</strong> —{' '}
          <code>main.tsx</code> 에서 <code>createBrowserRouter</code>로 라우트를 정의하고,{' '}
          <code>RouterProvider</code>로 렌더합니다. <code>App.tsx</code>는
          레이아웃이며 <code>{'<Outlet />'}</code>에 자식 페이지가 렌더됩니다.
        </p>
        <p>
          <strong className="text-sky-300">2. Store(Zustand)</strong> —{' '}
          <code>src/store/counterStore.ts</code> 에 스토어를 만들고, 필요한
          컴포넌트에서 <code>useCounterStore()</code> 훅을 바로 사용합니다
          (Provider 불필요).
        </p>
        <p>
          <strong className="text-sky-300">3. Tailwind</strong> —{' '}
          <code>index.css</code> 에 <code>@tailwind</code> 지시어를 넣고,
          컴포넌트에서 클래스 이름으로 바로 스타일을 적용합니다.
        </p>
      </div>

      <div className="rounded-lg border border-slate-700 bg-slate-900/70 p-3 text-sm text-slate-300">
        <p>
          현재 전역 count 값: <span className="text-sky-400">{count}</span>
        </p>
        <p className="mt-1 text-xs text-slate-400">
          홈 페이지에서 증가시킨 값이 여기서도 그대로 보이면, Router + Store가
          잘 연결된 것입니다.
        </p>
      </div>
    </section>
  )
}

