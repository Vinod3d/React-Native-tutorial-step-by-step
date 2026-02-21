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

# 4 – Core Components in React Native

This chapter explains the most important built-in components provided by **React Native**. These components are called **Core Components** because they come directly from the `react-native` package and are ready to use without installing any external library.

Understanding these components is very important for interviews and real-world app development.

## 1️⃣ What Are Core Components?

Core components are the basic building blocks used to design user interfaces in React Native applications.

They help you:

* Create layouts
* Display text and images
* Handle user touch
* Render lists efficiently
* Make content scrollable

These components work on both:

* Android
* iOS

They internally map to native UI components:

* Android → Native Views
* iOS → UIKit components


## 2️⃣ Essential React Native Core Components



# 1. View Component

### 📌 What is View?

`View` is the most basic container component in React Native.
It works similar to `<div>` in React (Web).

It is used for:

* Layout
* Styling
* Wrapping other components


### 📌 Basic Example

```jsx
import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Hello World</Text>
    </View>
  );
}
```


### 📌 Important Properties

| Property | Purpose                    |
| -------- | -------------------------- |
| style    | Used for layout and design |
| children | Nested components          |
| onLayout | Get layout measurements    |


### 📌 Interview Questions

**Q: What is View in React Native?**
👉 It is a container component used to structure layout and group other components.

**Q: Is View scrollable?**
👉 No. It is not scrollable by default.


# 2. Text Component

### 📌 What is Text?

`Text` is used to display text content.

⚠ Important Rule:
You cannot place raw text inside `View`.
Text must always be wrapped inside the `Text` component.


### 📌 Example

```jsx
<Text>Hello React Native</Text>
```


### 📌 Nested Text Example

```jsx
<Text>
  Hello <Text style={{ fontWeight: 'bold' }}>World</Text>
</Text>
```


### 📌 Important Props

| Prop          | Purpose      |
| ------------- | ------------ |
| style         | Text styling |
| numberOfLines | Limit lines  |
| onPress       | Click event  |


### 📌 Interview Questions

**Q: Why must text be wrapped in Text component?**
👉 Because React Native renders native text elements and does not allow plain strings outside `Text`.


# 3. Image Component

## 📌 What is Image?

`Image` is used to display images from:

* Local files
* Remote URLs


### 📌 Local Image Example

```jsx
<Image source={require('./assets/logo.png')} />
```


### 📌 Remote Image Example

```jsx
<Image
  source={{ uri: 'https://example.com/image.png' }}
  style={{ width: 200, height: 200 }}
/>
```

### 📌 Important Props

| Prop       | Purpose                    |
| ---------- | -------------------------- |
| source     | Image path                 |
| resizeMode | cover, contain, stretch    |
| style      | Required for remote images |


### 📌 Interview Questions

**Q: Why must width and height be specified for remote images?**
👉 Because React Native does not automatically calculate remote image dimensions.


# 4. ScrollView

### 📌 What is ScrollView?

`ScrollView` is a container that allows scrolling when content exceeds screen size.

Used for:

* Forms
* Long content
* Small static lists

### 📌 Example

```jsx
<ScrollView>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
  <Text>Item 3</Text>
</ScrollView>
```

---

### 📌 Important Props

| Prop                         | Purpose                  |
| ---------------------------- | ------------------------ |
| horizontal                   | Enable horizontal scroll |
| showsVerticalScrollIndicator | Show scrollbar           |


### 📌 Interview Question

**Q: Difference between ScrollView and FlatList?**

👉 ScrollView renders all items at once.
👉 FlatList renders items lazily (only visible ones).


# 5. FlatList

### 📌 What is FlatList?

`FlatList` is used for rendering large lists efficiently.

It improves performance using:

* Lazy loading
* Virtual rendering


### 📌 Basic Example

```jsx
import { FlatList, Text } from 'react-native';

const data = [
  { id: '1', name: 'Apple' },
  { id: '2', name: 'Banana' },
];

<FlatList
  data={data}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <Text>{item.name}</Text>}
/>
```


### 📌 Important Props

| Prop         | Purpose                      |
| ------------ | ---------------------------- |
| data         | Array of items               |
| renderItem   | Function to render each item |
| keyExtractor | Unique key                   |


### 📌 Interview Questions

**Q: Why is FlatList better than ScrollView for large data?**
👉 Because FlatList renders items only when needed, improving performance and memory usage.


# 6. TouchableOpacity

### 📌 What is TouchableOpacity?

It is a pressable wrapper that reduces opacity when pressed.

Used for:

* Buttons
* Clickable cards
* Interactive UI elements


### 📌 Example

```jsx
import { TouchableOpacity, Text } from 'react-native';

<TouchableOpacity onPress={() => alert('Pressed')}>
  <Text>Click Me</Text>
</TouchableOpacity>
```


### 📌 Interview Question

**Q: What happens when TouchableOpacity is pressed?**
👉 The opacity of the wrapped component decreases, giving visual feedback.


# 3️⃣ Core Components vs Community Components

Core Components:

* Built into `react-native`
* No installation required

Community Components:

* Created by third-party developers
* Installed separately

Example:

* `react-native-vector-icons` (community)
* View, Text (core)


# 4️⃣ Performance Perspective

| Component        | Use Case                 |
| ---------------- | ------------------------ |
| View             | Layout container         |
| Text             | Display text             |
| Image            | Show images              |
| ScrollView       | Small scrollable content |
| FlatList         | Large dynamic lists      |
| TouchableOpacity | Pressable UI             |


# 5️⃣ Common Interview Questions

1. What are core components in React Native?
2. Difference between ScrollView and FlatList?
3. Why can’t we use plain text inside View?
4. Why is FlatList optimized?
5. What is the use of keyExtractor?
6. Difference between TouchableOpacity and Pressable?
7. How does React Native map to native components?


# 6️⃣ Real-World Usage Example (Mini UI Example)

```jsx
<View style={{ flex: 1, padding: 20 }}>
  <Text style={{ fontSize: 20 }}>Fruits List</Text>

  <FlatList
    data={[
      { id: '1', name: 'Apple' },
      { id: '2', name: 'Banana' },
    ]}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <TouchableOpacity>
        <Text style={{ padding: 10 }}>{item.name}</Text>
      </TouchableOpacity>
    )}
  />
</View>
```

# 7️⃣ Summary

Core components are the foundation of every React Native app.

If you master:

* View
* Text
* Image
* ScrollView
* FlatList
* TouchableOpacity

You can build 70% of mobile UI easily.

If you want, I can now:

* Create assignment-style notes (Turnitin safe)
* Create practical exercises
* Create interview mock questions with answers
* Add this as README format for your GitHub tutorial repo

Tell me your next step 🚀
