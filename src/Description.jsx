import React from 'react';

const Description = () => (
  <div className='app-description'>
    <span>
      <p>Este proyecto consiste en una aplicación web que utiliza un scraper para obtener información de productos de Mercadona y mostrarla en una interfaz de usuario construida con React. A continuación se describe el flujo de trabajo del proyecto:</p>
      <ul>
        <li><strong>Scraper de Mercadona:</strong> Utiliza el scraper disponible en <a href="https://github.com/alejandro1000003/mercadona-scraper-api">mercadona-scraper-api</a> para extraer información de productos desde el sitio web de Mercadona. Este scraper recopila datos como nombres de productos, precios, imágenes y categorías.</li>
        <li><strong>Servidor API:</strong> La información obtenida por el scraper se sirve a través de un endpoint <code>/api</code> en un servidor local. Este servidor actúa como intermediario entre el scraper y la aplicación React, proporcionando los datos en formato JSON.</li>
        <li><strong>Aplicación React:</strong> La aplicación React se encarga de consumir los datos proporcionados por el servidor API. Utiliza Axios para realizar una solicitud GET al endpoint <code>/api</code> y obtener la información de los productos.</li>
        <li><strong>Interfaz de Usuario:</strong> Los datos obtenidos se almacenan en el estado de la aplicación y se muestran en la interfaz de usuario. La interfaz incluye imágenes clicables de las categorías de productos, permitiendo a los usuarios explorar los diferentes productos disponibles en Mercadona.</li>
      </ul>
      <p>Este flujo de trabajo permite mantener la información de productos actualizada y accesible a través de una interfaz de usuario amigable y fácil de usar.</p>
    </span>
  </div>
);

export default Description;