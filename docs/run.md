# Run Firebolt React Native App

Steps to run the application on your device as developer

## Getting Started with React Native

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.


# Run Firebolt React Native App on Localhost (PWA / Web)

This guide explains how to run Firebolt on your **browser** (localhost) as a **PWA** for development.

---

## Step 1: Install Dependencies

From the root of the Firebolt project:

```bash
# using npm
npm install

# OR using Yarn
yarn install
```

---

## Step 2: Start the Web Server

If the project is already configured with **React Native Web** and Expo (recommended):

```bash
# using npm
npm run web

# OR using Yarn
yarn web
```

This will start a development server (using Expo CLI or webpack), and open Firebolt in your default browser at:

```
http://localhost:19006
```

(or another port shown in your terminal).

---

## Step 3: Running as PWA

1. Once Firebolt is running in the browser, open **DevTools > Application > Manifest**.
2. You’ll see the PWA configuration (icon, theme, service worker).
3. In Chrome/Edge, click **Install App** from the address bar to add Firebolt as a standalone PWA.

---

## Step 4: Modify and Hot Reload

* Open `App.tsx` in your editor.
* Save changes → the browser will **hot reload** automatically.

---

## Troubleshooting

* If `npm run web` is not available, make sure you’re using **Expo** or have installed `react-native-web` + `webpack` config.
* Install missing web packages if needed:

```bash
npm install react-native-web react-dom @expo/webpack-config
```

* If using plain React Native CLI, you’ll need a **custom webpack config** to bundle for the web.

---

## Learn More

* [React Native Web Docs](https://necolas.github.io/react-native-web/docs/)
* [Expo Web (PWA)](https://docs.expo.dev/workflow/web/)

---

🔥 Now Firebolt runs on `localhost` as a **PWA in your browser** — no emulator required.

---
