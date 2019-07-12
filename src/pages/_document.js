import Document, { Head, Main, NextScript } from 'next/document'
import antdStyles from 'antd/dist/antd.min.css'
import tailwindStyles from '../styles/styles.css'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <style dangerouslySetInnerHTML={{ __html: tailwindStyles }} />
          <style dangerouslySetInnerHTML={{ __html: antdStyles }} />
        </Head>
        <body className="bg-grey-lightest">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
