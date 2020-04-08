import Link from 'next/link'
import Router from 'next/router'
// import { Button } from 'antd'
// Link和Router跳转方式是一样，只不过Link封装好了而已
export default () => {
    
    function goTest () {
        // Router.push('/test/b')
        Router.push({
            pathname: '/b',
            query: {
                id: 2
            }
        }, '/b/2')
    }
    
    return (
        <>
            <Link href="/test/[id]" as="/test/1">
                <button>a页面</button>
            </Link>
            <button onClick={goTest}>tb</button>
        </>
    )
}