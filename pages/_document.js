import　Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    // 当我们定义顶层组件getInitialProps，我们就要重写getInitialProps
    // 内部基础逻辑
    static async getInitialProps(ctx) {
        const props = await Document.getInitialProps(ctx)
        return {
            ...props
        }
    }
    
    render() {
        return (
            <Html>
                <Head>
                    <style jsx>
                    {`
                        .test { color: red }
                    `}
                    </style>
                    <body>
                        <div className="test">xxxx</div>
                        <Main />
                        <NextScript />
                    </body>
                </Head>
            </Html>
        )
    }
}
export default MyDocument