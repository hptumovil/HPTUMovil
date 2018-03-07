# HPTU Movil 🎮

<img src="http://www.hptu.org.co/instituto/images/logo.png" />

Aplicacion movil que permite al usuario ver e interactuar con los servicios que ofrece el hospital Pablo tobon Uribe.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Paginas](#pages)
3. [Providers](#providers)
4. [i18n](#i18n) (adding languages)

## <a name="getting-started"></a>Getting Started

Para probar el poryecto, instale la ultima version de Ionic CLI y ejecute el siguiente comando:

```bash
ionic lab
```
dentro de la carpeta del proyecto.

## Paginas

El proyecto lo componen diferente paginas, este es el listado de ella y su funcion.

-appointments: el módulo para agendar citas.

-checkin: permite a los pacientes realizar el check in, llenando un formulario, se programa por medio de  este módulo.

-contact: componente que permite al usuario llenar una formulario para poder contactar con el hospital.

-content: La pantalla principal que contiene los iconos a las funciones más usadas, se configura por medio de este módulo.

-donate: Componente que permite a los usuarios hacer donaciones.

-exam-detail: cuando el usuario busca sobre las instrucciones y/o recomendaciones de un examen médico la información detallada se muestra por medio de este componente.

-item-detail: cuando el usuario busca la información de un profesional, dicha información se muestra detallada por medio de este módulo.

-login: el módulo que permite hacer ingresar por medio usuario y contraseña a la aplicación.

-map: la función de como llegar se configura en este componente.

-med-exams: el buscador de instructivos para los exámenes médicos se configura en este componente.

-menu: el menú lateral de la aplicación se programa en este módulo.

-physicians: el módulo que permite buscar a nuestros profesionales se programa en este componente.

-settings: el área de configuracion general de la app va este componente.

-signup: El módulo que permite registrarse como nuevo usuario.

-tabs: este módulo se encarga de las pestañas que se ven la parte inferior de la aplicación.

-tutorial: pequeño tutorial que se muestra la primera vez que el usuario abre la aplicación.

-welcome: pantalla de bienvenida que muestra las opciones de ingresar o registrarse.

-pages.ts: archivo donde se exportan todas clases para que puedan ser usadas por otros componentes dentro de la aplicacion, asi nos evitamos tener que importar cada página cuando la vayamos a usar en otro lugar dentro del programa.



## Providers

Se implementa un calse llmada rest, que contiene las conexiones a la base de datos por medio de una interface RESTful y nos provee los datos en formato json.

### User

The `User` provider is used to authenticate users through its
`login(accountInfo)` and `signup(accountInfo)` methods, which perform `POST`
requests to an API endpoint that you will need to configure.

### Api

The `Api` provider is a simple CRUD frontend to an API. Simply put the root of
your API url in the Api class and call get/post/put/patch/delete 

## i18n

Ionic Super Starter comes with internationalization (i18n) out of the box with
[ngx-translate](https://github.com/ngx-translate/core). This makes it easy to
change the text used in the app by modifying only one file. 

### Adding Languages

To add new languages, add new files to the `src/assets/i18n` directory,
following the pattern of LANGCODE.json where LANGCODE is the language/locale
code (ex: en/gb/de/es/etc.).

### Changing the Language

To change the language of the app, edit `src/app/app.component.ts` and modify
`translate.use('en')` to use the LANGCODE from `src/assets/i18n/`
