import Header from './components/header'
import Footer from './components/footer'

import HomePage from './pages/HomePage'

export default function App() {
  return (
    <>

      <header>
        <Header />
      </header>

      <HomePage />

      <footer>
        <Footer />
      </footer>
    </>
  )
}