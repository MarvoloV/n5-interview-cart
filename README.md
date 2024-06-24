# Aplicativo React de Gestión de Productos y Carrito de Compras

## Funcionamiento General del Aplicativo

Este aplicativo React permite manejar un catálogo de productos, un carrito de compras y una funcionalidad para agregar nuevos productos. Aquí están las principales características:

1. **Listado de Productos:**
   - Se muestra un listado de productos obtenidos desde un archivo JSON adjunto.
   - Cada producto tiene la opción de ser agregado al carrito de compras con la respectiva cantidad.

2. **Carrito de Compras:**
   - Muestra los productos que han sido agregados con sus cantidades y precios unitarios.
   - Calcula y muestra el total correspondiente a la compra en tiempo real.

3. **Funcionalidades del Carrito:**
   - **Actualizar Cantidades:** Permite ajustar la cantidad de cada producto en el carrito antes de realizar la compra.
   - **Limpiar Carrito:** Vacía todos los productos agregados al carrito de compras.
   - **Comprar:** Simula la compra, actualizando las cantidades de productos disponibles según lo comprado.

4. **Agregar Nuevos Productos:**
   - Existe una página dedicada para agregar nuevos productos al catálogo.
   - Los nuevos productos ingresados se guardan localmente o se podrían integrar con un backend para persistencia.

## Pasos para hacer deploy de forma local en Vite

Para desplegar este aplicativo localmente utilizando Vite, sigue estos pasos:

1. **Clonar el Repositorio:**
   Clona el repositorio desde GitHub o donde se encuentre alojado.

   ```
   git clone <url-del-repositorio>
   cd <nombre-del-proyecto>
   ```

2. **Instalar Dependencias:**
Asegúrate de tener Node.js y npm (o yarn) instalados. Luego, instala las dependencias del proyecto.

   ```
   npm install
   ```
3. **Copiar .env.example a .env**
   ```
   cp .env.example .env
   ```


3. **Correr el Proyecto Localmente:**

   Inicia el servidor de desarrollo de Vite.

   ```
   npm run dev
   ```

4. **Correr los test**
  
   ```
   npm run test
   npm run coverage
   ```


## Acceder al Aplicativo:
[https://n5-interview.vercel-cart.app/](https://n5-interview-cart.vercel.app/)
