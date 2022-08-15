import {
  APP_NAME, APP_OG_IMAGE_URL, APP_URL
} from 'constants/index'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import NextNProgress from 'nextjs-progressbar'
import getLocaleMessages from 'utils/getLocaleMessages'
import store from '../store'
import '../styles/globals.scss'

const { wrapper } = store

const MyApp = ({ Component, pageProps }: AppProps) => {
  const {
    pageTitle,
    pageMetaTagItems,
  } = pageProps
  const router = useRouter()
  const { locale, asPath } = router
  const messages = getLocaleMessages(locale || '')
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta key='viewport' name='viewport' content='width=device-width,initial-scale=1' />
        <title>{pageTitle || messages.app_head_title}</title>
        {/* og */}
        <meta key='og-title' property='og:title' content={messages.app_head_title} />
        <meta key='og-description' property='og:description' content={messages.app_og_description} />
        <meta key='og-image' property='og:image' content={APP_OG_IMAGE_URL} />
        <meta key='og-url' property='og:url' content={`${APP_URL}${asPath}`} />
        <meta key='og-site-name' property='og:site_name' content={APP_NAME} />
        <meta key='og-type' property='og:type' content='website' />
        {/* twitter */}
        <meta key='twitter-title' name='twitter:title' content={messages.app_head_title} />
        <meta key='twitter-description' name='twitter:description' content={messages.app_og_description} />
        <meta key='twitter-image' name='twitter:image' content={APP_OG_IMAGE_URL} />
        <meta key='twitter-image-alt' name='twitter:image:alt' content={APP_NAME} />
        <meta key='twitter-card' name='twitter:card' content='summary_large_image' />
        {/* <meta key='twitter-site' name='twitter:site' content={APP_TWITTER_HANDLE} /> */}
        {/* <meta key='twitter-creator' name='twitter:creator' content={APP_TWITTER_HANDLE} /> */}
        {/* other */}
        <meta name='description' content={messages.app_og_description} />
        {/* <meta key='keywords' name='keywords' content={KEYWORDS} /> */}
        <meta key='viewport' name='viewport' content='width=device-width,initial-scale=1' />
        <meta property='fb:app_id' content='1335732560261685' />
        {
          pageMetaTagItems && (
            pageMetaTagItems.map((metaTagItem: any) => {
              if (metaTagItem.key === 'og-title') {
                return (
                  <>
                    {/* <meta key='twitter-title' name='twitter:title' content={metaTagItem.content} /> */}
                    <meta {...metaTagItem} />
                  </>
                )
              }
              if (metaTagItem.key === 'og-description') {
                return (
                  <>
                    {/* <meta key='twitter-description' name='twitter:description' content={metaTagItem.content} /> */}
                    <meta {...metaTagItem} />
                  </>
                )
              }
              if (metaTagItem.key === 'og-image') {
                return (
                  <>
                    {/* <meta key='twitter-image' name='twitter:image' content={metaTagItem.content} /> */}
                    <meta {...metaTagItem} />
                  </>
                )
              }
              return (
                <meta {...metaTagItem} />
              )
            }))
        }
      </Head>
      <NextNProgress
        color='rgb(199,233,12)'
        options={{
          showSpinner: false,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(MyApp)
