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
- Acumulación de productos en el carrito mediante el uso de Context
- Detalle del carrito de compra y valor total de ésta. Con la opción de eliminar productos.
- Uso de Firebase para el guardado de productos y la obtención de ellos

## Info visible
- Lista de cards de todos los productos
- Lista de cards de productos de una determinada categoría
- Información detallada del producto seleccionado
- Contador de items a solicitar
- Una vez que se carga la info breve de cada producto se pasa a cargar la info detallada, la cuál se obtiene mediante una promise que ejecuta un "find" para buscar el producto por "id"
- Cantidad de productos agregados al carrito, si el carrito no contiene productos no se muestra ningún número
- Detalle del carrito por producto, con la opción de eliminarlo, y el precio final de la compra. En caso de que el carrito no tenga productos se muestra una leyenda con un link a la landing page.
- Toda la info de los productos y sus respectivos detalles provienen de Firebase

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
- Manejo de eventos para Finalizar la compra
- Manejo de Context para guardar el detalle del producto seleccionado y la cantidad elegida
- Manejo de Context para mostrar el detalle del carrito, el precio total de la compra y la opción de poder eliminar algun producto de la compra
- Conditional Rendering para mostrar un número de items en caso que la cantidad de productos elegidos sea mayor a 0 o bien en el detalle del carrito para mostrar un link al landing page cuando no hay productos.
- Firebase para el guardado y manejo de datos
- Sweet alert