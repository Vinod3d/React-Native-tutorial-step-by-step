<style>
  h1 {
    color: #fff;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 20px 25px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }

  h2 {
    color: #fff;
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    padding: 15px 20px;
    border-radius: 8px;
    border-left: 5px solid #ff1744;
    box-shadow: 0 4px 10px rgba(245, 87, 108, 0.3);
  }

  h3 {
    color: #667eea;
    border-left: 4px solid #667eea;
    padding-left: 15px;
  }

  li {
    color: #444;
    margin: 12px 0;
  }

  li::marker {
    color: #f5576c;
    font-weight: bold;
  }

  strong {
    color: #f5576c;
    font-weight: 600;
  }

  code {
    background: #f5f5f5;
    padding: 2px 6px;
    border-radius: 4px;
    color: #c7254e;
  }

  pre {
    background: #2d2d2d;
    color: #f8f8f2;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #667eea;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  th {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 15px;
    border-bottom: 3px solid #f5576c;
  }

  td {
    padding: 12px 15px;
    border-bottom: 1px solid #e0e0e0;
  }

  tr:hover {
    background: #f9f9f9;
  }

  hr {
    border: none;
    height: 3px;
    background: linear-gradient(to right, #667eea, #764ba2, #f5576c);
    border-radius: 2px;
  }

  blockquote {
    background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
    border-left: 5px solid #667eea;
    padding: 20px 25px;
    border-radius: 8px;
  }
</style>



# 3: React Native Project Structure 

This chapter is very important from both **learning** and **interview** perspective. Every React Native developer must clearly understand the project structure because it helps in debugging, scaling, and maintaining real-world apps.



## 1️⃣ What is React Native Project Structure?

When you create a new app using:

* `npx react-native init MyProject` (CLI)
* `npx create-expo-app MyProject` (Expo)

React Native automatically generates a predefined folder structure.

This structure separates:

* Native code (Android & iOS)
* JavaScript logic
* Dependencies
* Configuration files

Understanding this structure helps you know:

* Where to write your code
* Where native files exist
* Where configuration is done
* How the app actually starts


## 2️⃣ Standard React Native CLI Project Layout

```
MyProject/
├── android/
├── ios/
├── node_modules/
├── app.json
├── App.js
├── index.js
└── package.json
```

Now let’s understand each part in detail.


## 3️⃣ Root Folder (MyProject/)

This is the main project directory. Everything related to your app exists inside this folder.

You should:

* Open this folder in VS Code
* Run commands inside this folder
* Install dependencies here

## 4️⃣ android/ Folder

This folder contains Android-specific native code.

Inside this folder:

* Java/Kotlin files
* Gradle configuration
* AndroidManifest.xml
* Native modules

Used when:

* You build APK
* You configure permissions
* You integrate native SDK
* You change app icon or splash screen

📌 Interview Question:
**Q: When do you modify the android folder?**
👉 When adding native libraries, changing permissions, or customizing Android-specific behavior.


## 5️⃣ ios/ Folder

This folder contains iOS-specific native code.

Inside this:

* Objective-C / Swift files
* Xcode project files
* Info.plist

Used when:

* You build IPA
* You add iOS permissions
* You integrate native iOS SDK

📌 Interview Question:
**Q: Can we delete ios folder?**
👉 No, unless you're building only Android app. But normally both platforms are kept.


## 6️⃣ node_modules/ Folder

This folder contains all installed dependencies.

When you run:

```
npm install
```

or

```
yarn install
```

All libraries get installed inside node_modules.

Examples:

* react
* react-native
* axios
* redux

⚠ Important:

* Never modify files inside node_modules
* Never push node_modules to GitHub


## 7️⃣ App.js (Main Application Component)

This is the main component of your app.

Example:

```javascript
import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Hello React Native</Text>
    </View>
  );
};

export default App;
```

What it does:

* Acts as root component
* All other components are imported here
* Navigation usually starts from here

📌 Interview Question:
**Q: What is App.js?**
👉 It is the root component of a React Native application.

## 8️⃣ index.js (Entry Point)

This is the starting point of your application.

Example:

```javascript
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

Explanation:

* AppRegistry registers your root component
* It tells native system which component to load first

📌 Interview Question:
**Q: Difference between App.js and index.js?**
👉

* index.js registers the app
* App.js contains UI logic

## 9️⃣ package.json

This is the most important configuration file.

It contains:

* Project name
* Dependencies
* Scripts
* Version

Example:

```json
{
  "name": "MyProject",
  "version": "0.0.1",
  "dependencies": {
    "react": "18.x",
    "react-native": "0.7x.x"
  }
}
```

Common Scripts:

```
npm start
npm run android
npm run ios
```

📌 Interview Question:
**Q: What is the role of package.json?**
👉 It manages project metadata and dependencies.


## 🔟 app.json

This file contains app configuration.

Example:

```json
{
  "name": "MyProject",
  "displayName": "My Project"
}
```

Used for:

* App name
* Display name
* Expo configuration (if using Expo)

## 1️⃣1️⃣ Real-World Best Practice Structure (Advanced)

In real projects, we don’t keep everything in App.js.

We create a structured architecture:

```
MyProject/
├── src/
│   ├── components/
│   ├── screens/
│   ├── navigation/
│   ├── services/
│   ├── redux/
│   └── utils/
├── assets/
│   ├── images/
│   └── fonts/
```

Explanation:

### components/

Reusable UI parts
Example: Button, Header, Card

### screens/

Full pages
Example: LoginScreen, HomeScreen

### navigation/

React Navigation setup

### services/

API calls (axios)

### redux/

State management

### utils/

Helper functions


## 1️⃣2️⃣ Interview Deep Concept: How App Actually Runs?

Flow:

1. index.js runs
2. AppRegistry registers App component
3. Native platform loads JS bundle
4. App.js renders UI
5. React Native bridge connects JS with native

You can mention the **React Native Bridge** concept in interviews.


## 1️⃣3️⃣ CLI vs Expo Project Structure Difference

If using Expo:

```
MyProject/
├── assets/
├── node_modules/
├── App.js
├── app.json
└── package.json
```

Expo does NOT show:

* android/
* ios/

Because Expo manages native layer internally.


## 1️⃣4️⃣ Important Git Ignore Files

Inside `.gitignore`:

```
node_modules/
android/build/
ios/build/
```

This prevents unnecessary files from being pushed.


## 1️⃣5️⃣ Common Beginner Mistakes

❌ Writing all code in App.js
❌ Editing node_modules
❌ Deleting android/ios accidentally
❌ Not understanding entry point
❌ Mixing UI and API logic in same file


## 🎯 Interview Rapid Fire Questions

1. What is the entry file in React Native?
   → index.js

2. What does AppRegistry do?
   → Registers root component

3. Where are dependencies stored?
   → node_modules

4. Where is Android native code stored?
   → android folder

5. Can we modify native code?
   → Yes, inside android/ios

6. What is package.json used for?
   → Dependency and script management

7. What is difference between Expo and CLI structure?
   → Expo hides native folders


## Advanced Knowledge

If interviewer is senior-level:

You can mention:

* Metro Bundler
* Hermes engine
* Gradle build system
* Xcode build system
* Autolinking
* Native modules

That shows deeper understanding.

## Summary

React Native project structure separates:

* Native platform code
* JavaScript UI logic
* Dependencies
* Configuration

Understanding this helps you:

* Debug properly
* Scale apps
* Structure professional projects
* Clear interviews confidently


If you want, next I can create:

* Chapter 4: Core Components (Detailed Notes)
* Or real project folder structure for your GitHub tutorial repository

Just tell me 🔥
