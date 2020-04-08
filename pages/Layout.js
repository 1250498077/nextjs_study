import Link from 'next/link'
import { Button } from 'antd'

export default ({ children }) => (
    <>
        <div>
            Hello world
            <p className="Button1">scoped!</p>
           
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