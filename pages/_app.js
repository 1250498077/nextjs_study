import App, { Container } from 'next/app'
import Layout from './Layout'
import 'antd/dist/antd.css'
import Index from './index'

class MyApp extends App {
    // state就类似于react的变化，向下流动，但是我们一般不用，因为有更好的方法
    state = {
        count: 1
    }
    
    // 每次页面切换都会被调用，这个方法都会被调用
    // 当我们重写App组件的getInitialProps方法的时候，要注意当子页面有 
    // getInitialProps的时候，要记得调用，然后把子页面传入到子页面组件中
    // 这点是非常重要的。
    // 然后传入到子页面
    static async getInitialProps({Component}) {
        let pageProps;
        // 当子页面有 getInitialProps ，就调用。
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps()
        }
        return {
            pageProps
        }
    }
    
    render() {
        // 在每个页面渲染的时候都会作为Component传入到我们的App中
        const { Component, pageProps } = this.props
        console.log(Component)  // 
        return (
            <Container>
                <Layout>
                    <Component {...pageProps} name="jokcy"/>
                </Layout>
            </Container>
        )
    }
}

export default MyApp;