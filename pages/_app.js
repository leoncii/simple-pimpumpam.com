import UserProvider from '../context/userProvider'
import { Provider } from 'next-auth/client'
import { Navbar } from '../containers/Navbar'
import { Footer } from 'components/Footer'
import '../styles/globals.css'

export default function MyApp ({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <UserProvider.Provider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </UserProvider.Provider>
    </Provider>
  )
}
