# Ecommerce: Guardería BetyVero

Coder House: Proyecto Final React - Entrega parcial.

Tienda virtual donde se podrá encontrar productos y/o servicios, ver los detalles de cada uno y seleccionar una cantidad a solicitar.

## Alcance al momento

- NavBar realizado con links mediante un Componente NavBar y componente CartWidget con ícono del carro de compras. El navBar es dinámico ya que obtiene cada category desde un collection en el firebase.
- Componente contenedor ItemListContainer que contiene leyenda que luego será reemplazado con el catálogo
- Utilización de Props 
- Estilos con CSS3 y Material
- Opción de aumentar y disminuir la cantidad de productos a pedir, limitado por la cantidad de stock que haya
- Cards de productos por categoría con imagen, cards de todos los productos con imagen, detalle de producto. Todo obtenido mediante promise que ejecuta find para buscar el producto por id o categoría o bien trae todos los productos. Todos los parametros pasados por props, useParams, etc..
- Navegación de la aplicación con React Router Dom
- Acumulación de productos en el carrito mediante el uso de Context
- Detalle del carrito de compra y valor total de ésta. Con la opción de eliminar productos.
- Uso de Firebase para el guardado de productos y la obtención de ellos
- Uso de Firebase y form para ingresar cada pedido, con datos de los productos y del usuario que lo solicita

## Info visible
- Lista de cards de todos los productos
- Lista de cards de productos de una determinada categoría
- Información detallada del producto seleccionado
- Contador de items a solicitar
- Una vez que se carga la info breve de cada producto se pasa a cargar la info detallada, la cuál se obtiene mediante una promise que ejecuta un "find" para buscar el producto por "id"
- Cantidad de productos agregados al carrito, si el carrito no contiene productos no se muestra ningún número
- Detalle del carrito por producto, con la opción de eliminarlo, y el precio final de la compra. En caso de que el carrito no tenga productos se muestra una leyenda con un link a la landing page.
- Toda la info de los productos y sus respectivos detalles provienen de Firebase
- Concretar el armado del pedido ingresando los datos del Usuario mediante un form

## Metodología aplicada
- Componentes React 
- Props 
- UseState
- UseEffect
- UseParams
- JS
- CSS
- Manejo de eventos para Finalizar la compra
- Manejo de Context para guardar el detalle del producto seleccionado y la cantidad elegida
- Manejo de Context para mostrar el detalle del carrito, el precio total de la compra y la opción de poder eliminar algun producto de la compra
- Conditional Rendering para mostrar un número de items en caso que la cantidad de productos elegidos sea mayor a 0 o bien en el detalle del carrito para mostrar un link al landing page cuando no hay productos.

## Librerías Públicas extras
- React Router Dom - https://v5.reactrouter.com/ - Utilizado para routing y navegación
- Spinners-react - https://www.npmjs.com/package/spinners-react - Utilizado para indicar al usuario que se está cargando el contenido/datos
- Material - https://mui.com/ - Utilizado para que el ecommerce tenga elementos con mejor estilo
- Firebase - https://firebase.google.com/ - Utilizado para el manejo de datos
- Sweet alert - https://sweetalert2.github.io/ - Utilizado para comunicar mensajes al usuario con un estilo mejorado.
- React-hook-form - https://react-hook-form.com/:
    * Register: Utilizado para tomar los datos
    * HandleSubmit: Utilizado para llamar a la función recibida como props para el ingreso de los datos al pedido de compra
    * FormState: { errors }: Utilizado para tratar las validaciones de los datos ingresados
    * Watch: Utilizado para poder validar el email reingresado con el original leyendo el campo ingresado 

## Cosas pendientes:

- categories/:id debería tener una descripción {id: ‘ad43k348j’, key: ‘calzado’, description: ‘Calzado’} para que quede /categories/calzado en lugar de /categories/ad43k348j
- Por cada librería pública extra que utilices, deberás incluir en algún archivo el link al proyecto, y una justificación de por qué agrega valor.

## Nice To Have:

- Auth/login
- Wishlist
- Custom item
- Stock check
- Cart persistente: