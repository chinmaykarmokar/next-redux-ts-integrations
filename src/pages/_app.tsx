import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

// Import global store
import { store } from "../state/store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
