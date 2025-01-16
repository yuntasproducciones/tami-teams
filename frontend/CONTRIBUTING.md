# Contribuyendo a TAMIPERU

Obligatorio que sea leído por todos los contribuyentes. Aquí encontrarán pautas sobre cómo empezar y contribuir a este proyecto.

## Contenido
1. [Cómo Empezar](#como-empezar)
2. [Requisitos Generales](#requisitos-generales)
3. [Clonando el Repositorio](#clonando-el-repositorio)
4. [Comandos de npm para Vite](#comandos-de-npm-para-vite)
5. [Estructura del Proyecto](#estructura-del-proyecto)
6. [Solicitudes de Funcionalidades](#solicitudes-de-funcionalidades)
7. [Reportar Errores](#reportar-errores)
8. [Estándares de Código](#estandares-de-codigo)
9. [Levantar el contenedor de MariaDB en Docker](#levantar-el-contenedor-de-mariadb-en-docker)


## Cómo Empezar

A continuación, se detallan los pasos necesarios para comenzar a contribuir al proyecto.

## Requisitos Generales

Para trabajar en este proyecto, necesitarás tener instalados en tu computadora:

- **Node.js** (Versión recomendada: 22.3)
    - Para verificar tu versión de Node.js, utiliza el siguiente comando:
  
```
      node -v
```
- **npm** (Se instala junto con Node.js)

Dependiendo de tu área de trabajo, se requiere lo siguiente:

### Para el Front-end
- **React**: Framework utilizado para el desarrollo del front-end.
- **Vite**: Usado como herramienta de construcción.

### Para el Back-end
- **Express.js**: Framework para construir aplicaciones web.

## Clonando el Repositorio

1. Clona el repositorio a tu máquina local usando el siguiente comando:

   git clone https://github.com/OmarCasasola/TAMIPERU.git

## Comanddos de npm para Vite

Una vez clonado el repositorio y navegado al directorio del proyecto,
utiliza los siguientes comandos para configurar y levantar el proyecto:

1. Instala las dependencias del proyecto:

```
   npm install
```
2. Instalar react-router-dom:
   Este paquete es esencial para gestionar la navegación en aplicaciones React.
```
   npm install react-router-dom
```

3. Inicia el servidor de desarrollo:

```
   npm run dev
```
4. Construye el proyecto para producción:

```
   npm run build
```
5. Para ejecutar pruebas:

```
   npm test
```
## Estructura del Proyecto

La estructura del proyecto está diseñada para facilitar la organización y el desarrollo.
A continuación, se presenta una descripción de las carpetas y archivos principales:

TAMIPERU/  
└── frontend/  
├── public/                 # Archivos públicos de la aplicación  
│   └── index.html          # Archivo HTML principal  
└── src/                    # Contiene el código fuente de la aplicación  
├── assets/                 # Archivos estáticos como imágenes y fuentes  
├── components/             # Componentes reutilizables de React  
├── pages/                  # Páginas de la aplicación  
├── services/               # Servicios para la gestión de datos (API, etc.)  
├── hooks/                  # Custom hooks de React  
├── utils/                  # Funciones utilitarias  
├── types/                  # Definiciones de tipos (TypeScript)  
├── styles/                 # Estilos globales  
├── index.css               # Archivo CSS global  
├── App.tsx                 # Componente principal de la app  
├── main.tsx                # Punto de entrada donde se renderiza el componente App  
└── vite-env.d.ts           # Definiciones de tipo de Vite  
└── package.json            # Gestión de dependencias y scripts

## Solicitudes de Funcionalidades

Si tienes una idea para una nueva funcionalidad, abre un issue en GitHub y describe:

1. La funcionalidad que te gustaría ver.
2. Por qué crees que es útil.
3. Ejemplos de cómo se usaría.

## Reportar Errores
Si encuentras errores, por favor abre un issue en GitHub con la siguiente información:

1. Descripción del error.
2. Pasos para reproducirlo.
3. Comportamiento esperado.
4. Capturas de pantalla (si es necesario).
5. Información adicional (sistema operativo, navegador, etc.).

## Estándares de Código
Por favor, consulta el archivo <strong> CODESTYLE.md </strong>para conocer los estándares de código
que se deben seguir en este proyecto.

¡Esperamos tus contribuciones! uwu

## Levantar el contenedor de MariaDB en Docker
- Por favor, consulta el archivo <strong> RULES.md </strong> para saber como levantar el contenedor de MariaDB en Docker.
- (Opcional si deseas tener la bd en docker, si no, puedes usar la bd local)
