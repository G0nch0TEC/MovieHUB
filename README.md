# 🎬 MovieHub - Proyecto de Aprendizaje

## Objetivo General

Desarrollar una aplicación web utilizando **Java + Spring Boot + React +
MySQL** para administrar un catálogo de películas, poniendo especial
énfasis en el aprendizaje de React sin descuidar el backend.

------------------------------------------------------------------------

# Roadmap del Proyecto

## Etapa 1 - Diseño y Base de Datos

### Objetivo

Diseñar correctamente el modelo de datos.

### Aprender

-   Modelado de datos
-   Relaciones
-   Normalización

### Tablas

-   Genero
-   Pelicula
-   Actor
-   PeliculaActor
-   Usuario
-   Favorito

------------------------------------------------------------------------

## Etapa 2 - Backend Base

### Objetivo

Construir una API REST funcional.

### Funcionalidades

-   CRUD de Películas
-   CRUD de Géneros
-   CRUD de Actores

### Aprender

-   Controllers
-   Services
-   Repositories
-   DTO
-   Validaciones
-   JPA/Hibernate
-   Manejo de excepciones

------------------------------------------------------------------------

## Etapa 3 - Primer React

### Objetivo

Consumir la API desde React.

### Pantallas

-   Inicio
-   Lista de películas

### Aprender

-   JSX
-   Componentes
-   useState
-   useEffect
-   Axios

------------------------------------------------------------------------

## Etapa 4 - Componentización

### Objetivo

Crear componentes reutilizables.

### Componentes sugeridos

-   Navbar
-   Footer
-   MovieCard
-   SearchBar
-   Button
-   Input
-   Loading

### Aprender

-   Props
-   Children
-   Organización del proyecto

------------------------------------------------------------------------

## Etapa 5 - Formularios CRUD

### Objetivo

Crear, editar y eliminar películas.

### Aprender

-   Formularios controlados
-   Validaciones
-   Manejo de eventos
-   Estado de formularios

------------------------------------------------------------------------

## Etapa 6 - React Router

### Objetivo

Implementar navegación.

### Rutas

-   /
-   /peliculas
-   /peliculas/:id
-   /peliculas/nueva
-   /peliculas/editar/:id
-   /favoritos

### Aprender

-   React Router
-   Parámetros
-   Navegación

------------------------------------------------------------------------

## Etapa 7 - Detalle de Película

### Mostrar

-   Portada
-   Título
-   Sinopsis
-   Género
-   Actores
-   Año
-   Duración
-   Calificación

### Aprender

-   Consumo por ID
-   Componentes grandes

------------------------------------------------------------------------

## Etapa 8 - Búsquedas

### Implementar

-   Buscar por nombre
-   Buscar por actor
-   Buscar por género

### Aprender

-   Filtros
-   Consultas al backend

------------------------------------------------------------------------

## Etapa 9 - Filtros y Ordenamiento

### Filtros

-   Género
-   Año
-   Calificación

### Ordenar por

-   Más nuevas
-   Más antiguas
-   Mejor calificadas

------------------------------------------------------------------------

## Etapa 10 - Favoritos

### Funcionalidades

-   Agregar favorito
-   Quitar favorito
-   Ver lista de favoritos

------------------------------------------------------------------------

## Etapa 11 - Dashboard

### Mostrar

-   Total de películas
-   Total de géneros
-   Total de actores
-   Película mejor calificada
-   Última película agregada

### Aprender

-   Dashboard
-   Tarjetas
-   Gráficos

------------------------------------------------------------------------

## Etapa 12 - Optimización de React

### Aprender

-   Context API
-   Custom Hooks
-   useMemo
-   useCallback

------------------------------------------------------------------------

## Etapa 13 - Autenticación

### Implementar

-   Login
-   Registro
-   JWT
-   Spring Security
-   Roles (Administrador y Usuario)

------------------------------------------------------------------------

## Etapa 14 - Pulido Final

### Agregar

-   Responsive
-   Tema oscuro
-   Toasts
-   Confirmaciones
-   Loader
-   Paginación

------------------------------------------------------------------------

# Estructura del Backend

``` text
moviehub-backend/
├── config/
├── controller/
├── dto/
├── entity/
├── exception/
├── mapper/
├── repository/
├── security/
├── service/
│   └── impl/
└── util/
```

# Estructura del Frontend

``` text
moviehub-frontend/
├── assets/
├── components/
├── context/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── services/
└── styles/
```

# Orden recomendado para aprender React

1.  Componentes
2.  Props
3.  JSX
4.  useState
5.  useEffect
6.  Axios
7.  Formularios
8.  React Router
9.  Context API
10. Custom Hooks
11. useMemo
12. useCallback

------------------------------------------------------------------------

# Objetivo Final

Al finalizar este proyecto deberías ser capaz de:

-   Construir una API REST completa con Spring Boot.
-   Diseñar una base de datos relacional con MySQL.
-   Consumir APIs desde React.
-   Organizar un proyecto frontend de forma profesional.
-   Implementar autenticación con JWT.
-   Desarrollar una aplicación Full Stack lista para desplegar.
