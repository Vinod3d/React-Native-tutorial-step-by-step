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




# 02-environment-setup

## 1. Introduction

Before building any React Native application, you must configure your system correctly. React Native requires Node.js, package managers, Android/iOS tools, and device simulators.

There are two main ways to start:

1. Expo CLI (Beginner Friendly)
2. React Native CLI (Recommended for Professional Development)



## 2. System Requirements

### Minimum Hardware

* 8 GB RAM (16 GB recommended)
* 10 GB free storage
* Modern processor (i5 or above recommended)



## 3. Required Software

### 1️⃣ Node.js

React Native runs on JavaScript, so Node.js is required.

* Download from: [https://nodejs.org](https://nodejs.org)
* Install LTS version

After installation, verify:

```bash
node -v
npm -v
```

---

### 2️⃣ Package Managers

You can use:

* npm (comes with Node)
* Yarn (optional)

Install Yarn:

```bash
npm install -g yarn
```

---

### 3️⃣ Git

Download from:
[https://git-scm.com](https://git-scm.com)

Verify:

```bash
git --version
```

---

## 4. Expo CLI Setup (Easy Method)

### Install Expo

```bash
npm install -g expo-cli
```

### Create Project

```bash
npx create-expo-app MyApp
cd MyApp
npm start
```

Scan QR using Expo Go app on Android/iOS.

Best for:

* Beginners
* Quick prototypes
* Faster development

Limitations:

* Less native control
* Some custom native modules unsupported


## 5. React Native CLI Setup 

Recommended for serious development.


### Step 1: Install Node (Already Done)



### Step 2: Install JDK

Download JDK 17.

After installation:

```bash
java -version
```

### Step 3: Install Android Studio

Download from:
[https://developer.android.com/studio](https://developer.android.com/studio)

During installation:

* Select Android SDK
* Select Android SDK Platform
* Select Android Virtual Device

### Step 4: Setup Android Environment Variables

Add to System Environment Variables:

```
ANDROID_HOME = C:\Users\YourName\AppData\Local\Android\Sdk
```

Add to PATH:

```
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\emulator
```

Restart system after configuration.

### Step 5: Create Virtual Device

Open Android Studio
Go to Device Manager
Create Virtual Device
Select Pixel Device
Select Recommended System Image

### Step 6: Create React Native CLI Project

```bash
npx react-native@latest init MyApp
cd MyApp
npx react-native run-android
```

## 6. iOS Setup

iOS development requires macOS.

Install:

* Xcode from App Store
* CocoaPods

Install CocoaPods:

```bash
sudo gem install cocoapods
```

Run:

```bash
cd ios
pod install
```

## 7. Running Project

### Android

```bash
npx react-native run-android
```

### iOS

```bash
npx react-native run-ios
```

## 8. Common Errors & Fixes

### Error: SDK Not Found

Check ANDROID_HOME path.


### Error: adb not recognized

Add platform-tools to PATH.


### Error: Gradle Build Failed

Run:

```bash
cd android
gradlew clean
```

## 9. Best Practices

* Always use LTS Node version
* Keep Android Studio updated
* Restart system after setting environment variables
* Use physical device for performance testing




## Windows Full Setup Guide

### Step 1: Install Node.js

Download LTS
Install normally

Verify:

```bash
node -v
```

### Step 2: Install Android Studio

Install with default options.
Open SDK Manager.
Install:

* Android 13 SDK
* Android SDK Build Tools
* Android Emulator
* Android SDK Platform Tools


### Step 3: Setup Environment Variables

1. Open Advanced System Settings
2. Environment Variables
3. Add ANDROID_HOME
4. Update PATH

### Step 4: Install React Native CLI

```bash
npx react-native@latest init TestApp
```

### Step 5: Run App

```bash
npx react-native run-android
```

## macOS Setup Summary

* Install Node
* Install Xcode
* Install CocoaPods
* Install Android Studio (optional for Android support)

## What is Expo?

**Expo** is an open-source framework and platform built around **React Native** that makes mobile app development faster and easier.

It provides ready-made tools, libraries, and services so you can build Android and iOS apps using JavaScript without worrying too much about native configuration.

## Simple Definition

Expo is a toolkit that helps you create React Native apps quickly without setting up complex Android Studio or Xcode configurations in the beginning.

## Why Expo Was Created?

When developers first started using React Native, they had to:

* Install Android Studio
* Configure SDK paths
* Set environment variables
* Handle native dependencies manually

This process was difficult for beginners.

Expo simplifies this by:

* Handling native configurations automatically
* Providing built-in APIs
* Offering a managed workflow

## How Expo Works

When you create an Expo app:

```bash
npx create-expo-app MyApp
```

Expo:

* Sets up the project structure
* Configures native dependencies
* Provides development server
* Allows testing on real device using **Expo Go**

You can scan a QR code and instantly see your app running.

## Key Features of Expo

### 1️⃣ No Native Setup Required (Initially)

You don’t need Android Studio or Xcode to start.

### 2️⃣ Expo Go App

Test your app on a physical device without building APK.

### 3️⃣ Built-in APIs

Expo provides APIs for:

* Camera
* Location
* Notifications
* File System
* Sensors

Without installing separate native modules.

### 4️⃣ OTA Updates

You can push updates without publishing new app versions to Play Store (in many cases).

## Expo Workflow Types

### 1️⃣ Managed Workflow (Default)

* Easy
* No native code editing
* Best for beginners

### 2️⃣ Bare Workflow

* Full native control
* Similar to React Native CLI
* Used for advanced apps


## Expo vs React Native CLI

| Feature               | Expo                   | React Native CLI          |
| --------------------- | ---------------------- | ------------------------- |
| Setup Difficulty      | Easy                   | Moderate                  |
| Native Code Access    | Limited (Managed)      | Full                      |
| Build Speed           | Fast                   | Slower Setup              |
| Custom Native Modules | Limited                | Fully Supported           |
| Best For              | Beginners / Prototypes | Production / Complex Apps |

## When Should You Use Expo?

Use Expo if:

* You are learning React Native
* You want quick prototyping
* You don’t need heavy native customization
* You want faster development cycle

Avoid Expo (Managed workflow) if:

* You need custom native modules not supported
* You are building highly performance-critical apps
* You need deep native integrations

## Real-World Example

If you want to build:

* A simple Todo App
* A Blog App
* A College Project
* An MVP Startup Idea

Expo is perfect.

If you want:

* Advanced Bluetooth integration
* Heavy native SDK integration
* Custom background services

React Native CLI is better.

## Final Understanding

Expo is like a shortcut layer on top of React Native.

It removes complexity so you can focus on:

* UI
* Logic
* Features

Instead of:

* Native configuration
* Build errors
* SDK management

