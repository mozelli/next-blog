// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  
    static async getInicialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
  
    render() {
    return (
        <Html>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
            </Head>
            <body>
                <Main />
            
                <NextScript />
            </body>
        </Html>
      )
  }
}

export default MyDocument;