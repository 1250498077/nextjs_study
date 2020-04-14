import Link from 'next/link'
import { Button } from 'antd'

export default ({ children }) => (
    <>
        <div>
            
            <Button>确定</Button>
            <style jsx>{`
                p {
                  color: blue;
                }
                div {
                  background: red;
                }
                .Button1 {
                    color: green
                }
            `}</style>
        </div>
        {children}
    </>
)