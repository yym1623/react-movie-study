### A. 라우터 생성 / 루트


| **이름**                                    | **타입** | **설명**                                |
| ----------------------------------------- | ------ | ------------------------------------- |
| `createBrowserRouter`                     | 함수     | 브라우저용 라우터 객체 생성 (요즘 기본)               |
| `RouterProvider` *(*`react-router/dom`*)* | 컴포넌트   | `router`를 받아 앱 전체에 라우터 컨텍스트 제공        |
| `Router`                                  | 컴포넌트   | 저수준 Router (직접 history 넣을 때 등, 잘 안 씀) |


### B. 링크 / 네비게이션 관련


| **이름**          | **타입** | **설명**                                                             |
| --------------- | ------ | ------------------------------------------------------------------ |
| `Link`          | 컴포넌트   | `a` 태그 대체, 기본 페이지 이동                                               |
| `NavLink`       | 컴포넌트   | `Link` 확장형, 활성 경로일 때 `isActive`로 클래스 분기 가능                         |
| `useNavigate`   | 훅      | 코드에서 `navigate('/about')`, `navigate(-1)` 등 이동 수행 (히스토리 앞/뒤 이동 포함) |
| `useNavigation` | 훅      | 현재 라우터 전환 상태(`idle`, `submitting`, `loading`) 확인                   |
| `redirect`      | 함수     | `loader` / `action` 안에서 다른 URL로 보내기 (로그인 실패 시 로그인 페이지로 보내기 등)      |


#### B-1. Link / NavLink 주요 props (att)


| **prop**             | **타입**               | **주로 쓰는 곳**                    | **설명**                                                                       |
| -------------------- | -------------------- | ------------------------------ | ---------------------------------------------------------------------------- |
| `to`                 | `string`             | `object`                       | `Link`, `NavLink`                                                            |
| `replace`            | `boolean`            | `Link`, `NavLink`              | `true`면 `history.push`가 아니라 `history.replace`처럼 동작 → 뒤로 가기 눌러도 이전 페이지로 안 돌아감 |
| `preventScrollReset` | `boolean`            | `Link`, `NavLink`              | `true`면 해당 링크로 이동해도 스크롤 위치를 맨 위로 초기화하지 않음 (스크롤 유지)                           |
| `state`              | `unknown`            | `Link`, `NavLink`              | 추가 상태를 함께 전달 (예: `state={{ from: location }}`) → `useLocation().state`로 읽음   |
| `reloadDocument`     | `boolean`            | `Link`                         | SPA 방식이 아니라 **진짜 브라우저 전체 새로고침**으로 이동하고 싶을 때                                  |
| `end`                | `boolean`            | `NavLink`                      | `true`면 **정확히 일치할 때만** 활성으로 처리 (중첩 경로에서 부모까지 같이 활성되는 것 방지)                   |
| `className`          | `string              | (args) => string`              | `NavLink`                                                                    |
| `style`              | `React.CSSProperties | (args) => React.CSSProperties` | `NavLink`                                                                    |


### C. URL / 경로 정보


| **이름**            | **타입** | **설명**                                           |
| ----------------- | ------ | ------------------------------------------------ |
| `useParams`       | 훅      | `/movies/:movieId` 같은 경로에서 `movieId` 읽기          |
| `useLocation`     | 훅      | `pathname`, `search`, `hash`, `state` 등 현재 위치 객체 |
| `useSearchParams` | 훅      | `?page=1` 같은 쿼리스트링 읽기/변경                         |
| `useResolvedPath` | 훅      | 상대 경로를 기준 경로 기준으로 계산                             |
| `useHref`         | 훅      | 위치 객체를 실제 `href` 문자열로 변환                         |


### D. 중첩 라우트 / 레이아웃


| **이름**       | **타입** | **설명**                                     |
| ------------ | ------ | ------------------------------------------ |
| `Outlet`     | 컴포넌트   | 부모 라우트에서 자식 라우트가 렌더되는 자리 (레이아웃 느낌 - 중첩 가능) |
| `useMatches` | 훅      | 현재 매칭된 모든 라우트 정보 배열 (중첩 구조 확인용)            |


### E. Data Router 관련 (loader / action 등)


| **이름**               | **타입** | **설명**                                                 |
| -------------------- | ------ | ------------------------------------------------------ |
| `loader`             | 함수     | 페이지 진입 전에 **권한 체크** 수행, 조건 불충족 시 `redirect`로 다른 경로로 보냄 |
| `useLoaderData`      | 훅      | 현재 라우트의 `loader` 결과 데이터 읽기                             |
| `useRouteLoaderData` | 훅      | 특정 라우트(id 기준)의 `loader` 데이터 읽기                         |
| `useActionData`      | 훅      | `action` 결과 데이터 읽기 (폼 제출 결과 등)                         |
| `Form`               | 컴포넌트   | `action`으로 POST/PUT 등 보낼 수 있는 폼                        |
| `useSubmit`          | 훅      | JS에서 `Form` submit 트리거                                 |


### F. 에러 / 기타


| **이름**                                   | **타입** | **설명**                             |
| ---------------------------------------- | ------ | ---------------------------------- |
| `useRouteError`                          | 훅      | 에러 라우트에서 발생한 에러 객체 읽기              |
| `ScrollRestoration` (`react-router/dom`) | 컴포넌트   | 라우트 전환 시 스크롤 위치 복원                 |
| `useNavigationType`                      | 훅      | 이동 타입(`POP`, `PUSH`, `REPLACE`) 확인 |
| `useInRouterContext`                     | 훅      | 현재 컴포넌트가 Router 안에 있는지 여부          |


