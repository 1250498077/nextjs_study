import { useRouter } from 'next/router'
import axios from 'axios'

const List = (props) => {
  const router = useRouter();
  const {res} = props;
  const { id } = router.query;
  return <>
    <p>当前展示的路由为: {id}</p>
    {
      res.list && res.list.map((item, index) => {
        return <div key={index}>xxxx</div>
      })
    }
  </>;
}

List.getInitialProps = async () => {
  let res = await axios.post('http://localhost:3000/product-list');
  return {
    res: res.data
  }
}


export default List;