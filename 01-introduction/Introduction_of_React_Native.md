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

# 01 - Introduction to React Native


## 1️⃣ What is React Native?

React Native is an open-source JavaScript framework used to build cross-platform mobile applications. It was originally developed by Meta Platforms (formerly Facebook).

With React Native, developers can create native mobile apps for iOS and Android using a single codebase written in JavaScript and React.

Even though the code is written in JavaScript, React Native renders real native UI components. This means the apps look and perform like fully native apps built with Swift, Objective-C, Java, or Kotlin.

In simple terms:

React Native allows you to build high-performance mobile apps for multiple platforms using one shared codebase and JavaScript.

## 2️⃣ Why React Native Was Created?

Before React Native:

* Android apps were written in Java/Kotlin
* iOS apps were written in Objective-C/Swift
* Two separate teams were required
* Development cost was high

Meta wanted:

* Faster development
* Single codebase
* Native performance
* Better developer experience

So they created React Native.


## 3️⃣ React vs React Native

| React             | React Native           |
| ----------------- | ---------------------- |
| Used for web apps | Used for mobile apps   |
| Uses HTML         | Uses Native Components |
| Runs in browser   | Runs on mobile devices |
| Uses CSS          | Uses StyleSheet API    |

React Native does NOT use HTML like:

```html
<div>
```

Instead it uses:

```javascript
<View>
```


## 4️⃣ How React Native Works Internally

React Native uses a **bridge architecture**.

### Architecture Flow:

JavaScript Code
⬇
Bridge
⬇
Native Modules (Android/iOS)

* JavaScript runs in a separate thread
* Native UI renders on main thread
* Bridge connects both worlds

In newer versions, React Native uses:

* Fabric (New Rendering System)
* TurboModules
* JSI (JavaScript Interface)

These improve performance significantly.

## 5️⃣ Key Features of React Native

- **Cross Platform:-** Write once, run on Android & iOS.

- **Native Performance:-** Uses real native components.

- **Hot Reloading:-** See changes instantly without restarting app.

- **Large Community:-** Backed by Meta and open-source contributors.

- **Third-party Libraries:-** Thousands of npm packages available.

## 6️⃣ Advantages of React Native

* Faster development
* Lower cost
* Reusable code
* Strong community
* Easy to learn (if you know JavaScript)

## 7️⃣ Limitations of React Native

* Performance slightly lower than fully native apps
* Sometimes requires native code
* Debugging bridge issues can be complex
* Large app size

## 8️⃣ Popular Apps Built with React Native

* **Facebook**
* **Instagram**
* **Shopify**
* **Discord**
* **Walmart**

These apps prove React Native is production-ready.


## 9️⃣ Who Should Learn React Native?

* JavaScript developers
* React developers
* Frontend developers
* Students
* Freelancers
* Startup founders


## 🔟 Career Scope

React Native developers are in high demand because:

* Companies prefer cross-platform solutions
* Cost-effective development
* Fast MVP building
* Startups prefer it

You can work as:

* React Native Developer
* Mobile App Developer
* Cross-platform Engineer
* Freelance App Developer





## 🔹 React Native vs Other Frameworks

| Framework      | Language    | Performance | Code Reuse |
| -------------- | ----------- | ----------- | ---------- |
| React Native   | JavaScript  | High        | High       |
| Flutter        | Dart        | Very High   | High       |
| Native Android | Java/Kotlin | Very High   | No         |
| Native iOS     | Swift       | Very High   | No         |

---

## 🔹 When to Use React Native?

Use React Native when:

* You need cross-platform app
* Budget is limited
* Small to medium apps
* Startup MVP
* Fast development required

Avoid React Native when:

* Heavy 3D gaming apps
* Extremely performance-critical apps


## 🔹 Future of React Native

React Native is continuously improving with:

* New Architecture
* Better performance
* Strong ecosystem
* Growing enterprise adoption


## 🧠 Interview Questions (Basic Level)

1. What is React Native?
2. How is React Native different from React?
3. What is bridge in React Native?
4. Name some apps built with React Native.
5. What are advantages of React Native?


