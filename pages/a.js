import { useRouter, withRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>My Blog Post: {id}</p>
}

export default Post