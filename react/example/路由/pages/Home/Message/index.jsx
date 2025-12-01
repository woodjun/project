import {NavLink, Outlet, useNavigate} from 'react-router-dom'

export default function Message() {
  const navigate = useNavigate()
  const infoArr = [
    {
      id: '001',
      title: '标题1',
      content: '内容1'
    },
    {
      id: '002',
      title: '标题2',
      content: '内容2'
    },
    {
      id: '003',
      title: '标题3',
      content: '内容3'
    },
    {
      id: '004',
      title: '标题4',
      content: '内容4'
    },
  ]
  // 编程式导航
  function go(item) {
    navigate('detail', {replace: false, state: item})
  }
  return (
    <div>
      <ul>
        {
          infoArr.map(item => (
            <li key={item.id}>
              {/* params传参 */}
              {/* <NavLink to={`detail/${item.id}/${item.title}/${item.content}`}>{item.title}</NavLink> */}
              {/* search传参 */}
              {/* <NavLink to={`detail?id=${item.id}&title=${item.title}&content=${item.content}`}>{item.title}</NavLink> */}
              {/* state传参 */}
              <NavLink 
                to="detail" 
                state={{id: item.id, title: item.title, content: item.content}}>
                  {item.title}
              </NavLink>
              <button onClick={() => go(item)}>跳转</button>
            </li>
          ))
        }
      </ul>
      <Outlet />
    </div>
  )
}
