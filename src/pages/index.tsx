import Header from '../components/Header'

const HomePage = () => {
  return (
    <div className="flex h-screen w-full flex-col">
      <Header />
      <main className="grid grid-cols-12">Main</main>
    </div>
  )
}

export default HomePage
