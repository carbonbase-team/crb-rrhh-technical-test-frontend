# Carbonbase - Prueba Técnica

Este es un proyecto de [**React Native**](https://reactnative.dev) creado con [`@react-native-community/cli`](https://github.com/react-native-community/cli), sin ningún framework adicional.

## Configuración del Proyecto

> **Nota**: Asegúrate de haber completado la guía de [Configuración del Entorno](https://reactnative.dev/docs/set-up-your-environment) antes de continuar.

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o Yarn
- Android Studio (para desarrollo Android)
- Xcode (para desarrollo iOS - solo macOS)
- Ruby y Bundler (para iOS)

### Paso 1: Instalar Dependencias

Ejecuta el siguiente comando desde la raíz del proyecto para instalar las dependencias:

```sh
# Usando npm
npm install

# O usando Yarn
yarn install
```

### Paso 2: Configurar iOS (solo macOS)

Para iOS, es necesario instalar las dependencias de CocoaPods:

```sh
# Instalar bundler (solo la primera vez)
bundle install

# Instalar pods
cd ios && bundle exec pod install && cd ..
```

### Paso 3: Iniciar Metro

Ejecuta Metro, la herramienta de build de JavaScript para React Native:

```sh
# Usando npm
npm start

# O usando Yarn
yarn start
```

### Paso 4: Ejecutar la Aplicación

Con Metro ejecutándose, abre una nueva terminal y ejecuta uno de los siguientes comandos:

#### Android

```sh
# Usando npm
npm run android

# O usando Yarn
yarn android
```

#### iOS

```sh
# Usando npm
npm run ios

# O usando Yarn
yarn ios
```

Si todo está configurado correctamente, deberías ver la aplicación ejecutándose en el emulador de Android, simulador de iOS o en tu dispositivo conectado.

## Sobre la Prueba Técnica

Esta prueba técnica consiste en **reproducir un componente diseñado en Figma**. Al inicio de la prueba, se te proporcionará acceso al diseño de Figma correspondiente.
La prueba se realizará en vivo, deberás compartir tu pantalla completa y se te pedirá que expliques tu proceso de desarrollo.

### Criterios de Evaluación

Se prestará especial atención a los siguientes aspectos:

1. **Capacidad de Resolución**: Habilidad para interpretar y resolver los requerimientos del diseño
2. **Prolijidad del Código**: Código limpio, bien estructurado y fácil de mantener
3. **Componentización**: Correcta separación de componentes reutilizables y modularización

### Estructura del Proyecto

- `src/components/` - Componentes reutilizables de la aplicación
- `src/assets/` - Recursos estáticos (imágenes, fuentes, etc.)
- `App.js` - Componente principal de la aplicación

## Comandos Útiles

```sh
# Limpiar cache de Metro
npx react-native start --reset-cache

# Limpiar build de Android
cd android && ./gradlew clean && cd ..

# Limpiar build de iOS
cd ios && xcodebuild clean && cd ..
```

## Solución de Problemas

Si tienes problemas para ejecutar el proyecto, consulta la página de [Troubleshooting](https://reactnative.dev/docs/troubleshooting) de React Native.

## Recursos Adicionales

Para aprender más sobre React Native, consulta los siguientes recursos:

- [Sitio Web de React Native](https://reactnative.dev) - aprende más sobre React Native
- [Primeros Pasos](https://reactnative.dev/docs/environment-setup) - una **guía general** de React Native y cómo configurar tu entorno
- [Aprende lo Básico](https://reactnative.dev/docs/getting-started) - un **tour guiado** de los **fundamentos** de React Native
- [Blog](https://reactnative.dev/blog) - lee las últimas publicaciones oficiales del **Blog** de React Native
- [`@facebook/react-native`](https://github.com/facebook/react-native) - el repositorio **GitHub** de código abierto para React Native
