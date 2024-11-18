Ramos Luna David - 21490571
HomeWorld - Gestor de tareas

Descripción
	HomeWorld es una aplicación simple para gestionar tareas que permite a los usuarios crear tareas, 
	marcarlas como completadas, eliminarlas y adjuntar archivos a cada tarea. 
	Los usuarios pueden filtrar las tareas por su estado (todas, completadas o pendientes) 
	y ver o descargar los archivos adjuntos. Los datos se guardan localmente, 
	por lo que las tareas persisten incluso después de actualizar la página.

Instalación y Configuración
	Paso 1: Descargar e instalar Node.js
	
	1. Visita el sitio oficial de Node.js
	2. Selecciona la versión LTS (Long Term Support)
	3. Descargar el instalador
	4. Instalar Node.js
	
	Paso 2: Verificar la instalación
	1. Abrir la terminal o consola
	2. Verificar la instalación de Node.js: Escribe el siguiente comando en la terminal:
		node -v
	Esto debería mostrarte la versión de Node.js instalada, por ejemplo:
	v18.17.1
	3. Verificar la instalación de npm: Escribe el siguiente comando para verificar que npm también está instalado:
		npm -v
	Esto debería mostrarte la versión de npm instalada, por ejemplo:
		8.19.3
	
	Paso 3: Usar npm para instalar dependencias en un proyecto
	Una vez que tienes Node.js y npm instalados, ya puedes comenzar a gestionar dependencias en tus proyectos. 
	Para instalar las dependencias de un proyecto, sigue estos pasos:

	Ir a tu directorio de proyecto: 
	Navega al directorio de tu proyecto en la terminal usando el comando cd:
		cd ruta/a/tu/proyecto
	Instalar dependencias con npm: 
	Si tu proyecto ya tiene un archivo package.json 
	(generalmente creado cuando inicias un proyecto con Node.js), puedes instalar las dependencias listadas en él con el siguiente comando:
		npm install
	Esto descargará todas las dependencias necesarias para el proyecto.

	Paso 4: Para iniciar tu proyecto debes ejecutar el comando:
		npm start
	Con esto se abrira una pestaña en tu navegador y ya podrás trabajar en tu proyecto.

Flujo de trabajo y Componentes Principales

#TaskForm:
	Permite al usuario ingresar los detalles de una nueva tarea (título, descripción, fecha de vencimiento y hora de vencimiento).
	Envía la tarea y la agrega a la lista.
	Las tareas se guardan en el localStorage del navegador para persistencia.

#TaskList:
	Muestra la lista de tareas.
	Cada tarea muestra su título, descripción, fecha de vencimiento y hora.
	Las tareas pueden marcarse como completadas, eliminarse o actualizarse con un archivo.
	Para cada tarea, los usuarios pueden subir un archivo, verlo si es una imagen o un PDF, o descargarlo.

#App:
	Gestiona el estado de la aplicación, incluyendo los datos de las tareas y los filtros.
	Utiliza los hooks useState y useEffect de React para gestionar las tareas y almacenarlas en el localStorage.
	Maneja el filtrado de tareas según su estado (todas, completadas o pendientes).
	Pasa las propiedades necesarias a los componentes TaskForm y TaskList para manejar la creación, el cambio de estado, 
	y la eliminación de tareas, así como el manejo de archivos.

#LocalStorage:
	Las tareas se almacenan en localStorage para mantenerlas entre recargas de la página.
	Cada vez que la lista de tareas se actualiza, las nuevas tareas se guardan en el localStorage.

Características
	-Creación de tareas con título, descripción, fecha de vencimiento y hora.
	-Filtrado de tareas por estado: completadas, pendientes o todas.
	-Subida de archivos: Adjuntar archivos a las tareas y verlos o descargarlos.
	-Cambio de estado de la tarea: Marcar tareas como completadas o pendientes.
	-Eliminación de tareas: Eliminar tareas cuando ya no sean necesarias.