import { useState } from 'react'



export default function SignIn() {

  const [email, setEmail] = useState('123')


  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    console.log('email', email)
  }


  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  const data1 = '3'

  return (
    <div>
      <h1 style={{ color: 'blue' }} >SignIn</h1>
      <form onSubmit={handleSubmit}>
        <div className="text-black" >
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)}  />
        </div>
        {/* 조건 및 반복문 같은 표현식은 표현식만 돔에 표시가능 (ex if는 문장이라 표시 불가) -> 무조건 js데이터는 데이터 바인딩으로 표현 */}
        {/* if - 문장이라 표현식이아님 (script쪽에서 바인딩하거나) -> 돔에선 데이터 비교 조건같은걸로 효과는 똑같음 */}
        {/* 반복문들은 다 표현식이라 가능 */}
        {/* 삼항연산자할때 () 묶는건 여러개를 하나처럼 표시할때인데 - 하나일땐 생략해도 똑같지만 가독성을 위해 작성함 */}
        
        {data1 === '3' && <div style={{ color: 'blue' }}>data1 is 3</div>}

        <ul>
          {products.map((i) => (
            <li key={i.id}>
              {i.title}
            </li>
          ))} 
        </ul>


        <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">SignIn</button>
      </form>
    </div>
  )
}
