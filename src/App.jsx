import './App.css'
import AllProducts from './pages/all-products/AllProducts'

function App() {

  return (
    <>
      <div className="p-4 bg-gray-100">
        <h1 className="text-xl font-bold">Product List</h1>
      </div>
      <div className=''>
        <AllProducts />
      </div>
    </>
  )
}

export default App
