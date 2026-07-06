# 🎬 MovieHub

## Objetivo

Desarrollar una aplicación web con **Spring Boot + React + MySQL** para
consultar una cartelera de películas y simular la compra de tickets, con
el objetivo de practicar el desarrollo Full Stack.

------------------------------------------------------------------------

# Alcance del proyecto

Este proyecto **no implementará autenticación**.

Las compras se realizarán como invitado, solicitando únicamente la
información necesaria del comprador:

-   Nombre completo
-   DNI
-   Correo electrónico
-   Teléfono (opcional)

> En una futura versión se podrá agregar Login, Spring Security y JWT.

------------------------------------------------------------------------

# Roadmap

## Etapa 1 - Base de Datos

### Tablas

-   Genero
-   Pelicula
-   Horario
-   Ticket

### Objetivo

Diseñar el modelo relacional y las relaciones entre entidades.

------------------------------------------------------------------------

## Etapa 2 - Backend

### CRUD

-   Géneros
-   Películas
-   Horarios

### Aprender

-   Controllers
-   Services
-   Repositories
-   DTO
-   Validaciones
-   JPA / Hibernate

------------------------------------------------------------------------

## Etapa 3 - Frontend

### Pantallas

-   Inicio
-   Cartelera
-   Detalle de película
-   Compra de ticket
-   Confirmación de compra
-   Consulta de tickets por DNI

### Aprender

-   JSX
-   Componentes
-   Props
-   useState
-   useEffect
-   Axios
-   React Router

------------------------------------------------------------------------

## Etapa 4 - Compra de Ticket

### Formulario

-   Nombre completo
-   DNI
-   Correo electrónico
-   Teléfono (opcional)
-   Horario
-   Cantidad de entradas

El backend calculará el total y registrará la compra.

------------------------------------------------------------------------

## Objetivos de aprendizaje

-   Crear una API REST con Spring Boot.
-   Diseñar una base de datos en MySQL.
-   Consumir APIs desde React.
-   Crear formularios con validaciones.
-   Organizar componentes reutilizables.
-   Comprender la comunicación entre frontend y backend.

------------------------------------------------------------------------

# Estructura del proyecto

## Backend

``` text
moviehub-backend/
├── controller/
├── dto/
├── entity/
├── repository/
├── service/
├── config/
└── exception/
```

## Frontend

``` text
moviehub-frontend/
├── components/
├── pages/
├── services/
├── routes/
├── hooks/
├── assets/
└── styles/
```

------------------------------------------------------------------------

# Mejoras futuras

-   Login de usuarios.
-   Spring Security + JWT.
-   Panel administrativo.
-   Selección de asientos.
-   Envío de correo de confirmación.
-   Dashboard de estadísticas.
