import { useState, useEffect } from "react"
import axios from "axios"
import "./styles/app.css"
import ClickableImage from "./ClickableImage"
import productos from '../productos.json';
import Description from './Description';

const categoryImagesArray = [
  { nombre: 'aceites', url: '/aceites', image: 'olive-oil.png' },
  { nombre: 'aguas-y-refrescos', url: '/aguas-y-refrescos', image: 'drop.png' },
  { nombre: 'aperitivos', url: '/aperitivos', image: 'snack.png' },
  { nombre: 'arroz-legumbres-y-pasta', url: '/arroz-legumbres-y-pasta', image: 'peas.png' },
  { nombre: 'azucar-caramelos-y-chocolate', url: '/azucar-caramelos-y-chocolate', image: 'donut.png' },
  { nombre: 'bebe', url: '/bebe', image: 'baby-boy.png' },
  { nombre: 'bodega', url: '/bodega', image: 'wine-bottle.png' },
]

function App() {

  const [products, setProducts] = useState([])
  const [showDescription, setShowDescription] = useState(false);

  const fetchAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api") // Reemplaza con tu URL de servidor
      setProducts(response.data.scrapingResults || []) // Asegúrate de que `scrapingResults` exista
    } catch (error) {
      console.error("Error fetching data,recurri:", error)
      setProducts(productos.scrapingResults || []);
    }
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const currentPath = String(window.location.pathname) // Elimina el '/' inicial
  const renderContent = () => {
    // Routing cutre (no recomendado)
    if (currentPath !== "/") {
      return (
        <div className="product-container">
          {products
            .filter(product => String(product.categoria) === currentPath.replace(/^\//, ''))
            .map((product, index) => (
              <ClickableImage key={index} src={product.imagen} price={product.precio} />
            ))}
        </div>
      )
    } else {
      return (
        <>
          <h1 className="category-title">Categorías de productos</h1>
          <div className="category-container">
          {categoryImagesArray.map((category, index) => (
            <a key={index} href={category.url}>
              <img className="category-image" src={`./images/categorias/${category.image || 'snack.png'}`} alt={category.name || 'Categoría'} style={{ width: '120px', height: '120px', borderRadius: '20%', padding: '7px' }} />
            </a>
          ))}
          </div>
          <button className="help-button" onClick={toggleDescription}><img src={"./images/ask.png"} alt="Ayuda" style={{ width: '30px', height: '30px', padding: '7px' }} /></button>
          {showDescription && <Description />}
        </>
      )
    }
  }

  return (
    <>
      {currentPath !== '/' ? <span>{currentPath} <a className="help-button" href='/'><img src={"./images/return.png"} alt="Volver" style={{ width: '30px', height: '30px', padding: '7px' }} /></a></span> : null}
      {products.length > 0 ? (
        <>
         {renderContent()}
        </>
      ) : (
        <p>Cargando categorías...</p>
      )}
    </>
  )
}

export default App
