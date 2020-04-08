import { useRouter } from 'next/router'
import styles from './my.css'
const Post = () => {
  const router = useRouter();
  return <>
  <p>bbbbbbbbbbbbbbbb: {router.query.id}</p>
     <Button className={styles.test}>xxxx</Button>
  </>
}

export default Post