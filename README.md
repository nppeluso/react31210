# Ecommerce: Guardería BetyVero

Coder House: Proyecto Final React - Entrega parcial.

Tienda virtual donde se podrá encontrar productos y/o servicios, ver los detalles de cada uno y seleccionar una cantidad a solicitar.

## Alcance al momento

- NavBar realizado con links mediante un Componente NavBar y componente CartWidget con ícono del carro de compras
- Componente contenedor ItemListContainer que contiene leyenda que luego será reemplazado con el catálogo
- Utilización de Props 
- Estilos con CSS3 y Material
- Opción de aumentar y disminuir la cantidad de productos a pedir, limitado por la cantidad de stock que haya
- Cards de productos por categoría con imagen, cards de todos los productos con imagen, detalle de producto. Todo obtenido mediante promise que ejecuta find para buscar el producto por id o categoría o bien trae todos los productos. Todos los parametros pasados por props, useParams, etc..
- Navegación de la aplicación con React Router Dom

## Info visible
- Lista de cards de todos los productos
- Lista de cards de productos de una determinada categoría
- Información detallada del producto seleccionado
- Contador de items a solicitar
- Una vez que se carga la info breve de cada producto se pasa a cargar la info detallada, la cuál se obtiene mediante una promise que ejecuta un "find" para buscar el producto por "id"

## Metodología aplicada

- Componentes React 
- React Router Dom
- Props 
- UseState
- UseEffect
- UseParams
- Manual Promise
- JS
- CSS
- Material
- Spinners-react

