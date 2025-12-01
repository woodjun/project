import { useLocation, useParams, useSearchParams } from 'react-router-dom'

export default function Detail() {
  // 接收params参数
  // const {id, title, content} = useParams()
  // 接收search参数
  // const [search, setSearch] = useSearchParams()
  // const id = search.get('id')
  // const title = search.get('title')
  // const content = search.get('content')
  // 接收State参数
  const location = useLocation()
  const {id, title, content} = location.state
  return (
    <ul>
      <li>id：{id}</li>
      <li>title：{title}</li>
      <li>content：{content}</li>
    </ul>
  )
}
