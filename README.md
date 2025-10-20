# Introduction to HTML and Tailwind CSS

## HTML
HTML stands for Hyper Text Markup Language. Which is a very fancy way of saying a language that makes text annotations.  
This read  `README.md` files is written in markdown , which is also a markup language.  
  
### Website structure.  
HTML is the underlying structure of any website if you strip down. 

### But why are we learning about the web if were app committee?

Because web development and app development have so many parallels!  

For example


`example.html` (Web)
```html
<div class="max-w-sm mx-auto bg-white shadow-lg rounded-xl p-6 text-center">
  <img src="avatar.png" class="w-24 h-24 mx-auto rounded-full" />
  <h2 class="text-xl font-bold mt-4">Jane Doe</h2>
  <p class="text-gray-600">Frontend Developer</p>
  <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
    Follow
  </button>
</div>
```

`example.jsx` (App)

```jsx
export default function ProfileCard() {
  return (
    <View style={styles.card}>
      <Image source={require('./avatar.png')} style={styles.avatar} />
      <Text style={styles.name}>Jane Doe</Text>
      <Text style={styles.role}>Frontend Developer</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
}
```

As you can see the same type structure is used in both files. The main difference being that the tags used between web and app are named differently.
**Tags are any element wrapped with <> or </>** 
### Setup

The bare minimum for any HTML is 
```html
<!DOCTYPE html> <!-- Tells the browser this an html file -->
<html>
  <head>  <!-- Think of this as the set up tag  -->
    <title>My First Page</title> <!-- Tittle that shows in the tab -->
  </head>
  <body> <!-- Remainder of the file , what you see-->
    <h1>Hello World</h1>
  </body>
</html>

```
### Tags 
1. `<h1> - <h6>` headings  
These are used creating titles and subtitles
<div>
<h1> Heading 1</h1>
<h2> Heading 2</h2>
<h3> Heading 3</h3>
<h4> Heading 4</h4>
<h5> Heading 5</h5>
<h6> Heading 6</h6>
</div>. 

2. `<p>` paragraphs , general purpose text bodies

3. `<a>` links  
`<a href ="https://theuselessweb.com/"> Click this </a>`  
<a href ="https://theuselessweb.com/"> Click this </a>

4. `<img>` images  
`<img src ="https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b"> </img>`
<img src ="https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b"> </img>


5. Lists  
```
<ul>Unordered List: <ul>

<ol> Ordered List: <ol>

<li> List Item: <li>
```

<h3>Shopping List</h3>
<ul>
  <li>Milk</li>
  <li>Eggs</li>
  <li>Bread</li>
</ul>

6. `<div>` most basic tag , has no meaning 

7. `<nav> , <header> , <aside>`
8. So much more


## Tailwind CSS

So now that we know how to **structure** a page with HTML, how do we **style** it?  
Traditionally, developers used plain CSS or frameworks like Bootstrap. Tailwind takes a different approach:  

👉 Instead of writing custom CSS rules, you use **utility classes** directly in your HTML.  

For example:

### Without Tailwind (plain HTML)
```html
<h1>Hello World</h1>
<p>This is a simple webpage.</p>
```

### With Tailwind
```html
<h1 class="text-3xl font-bold text-blue-600">Hello World</h1>
<p class="mt-2 text-gray-600">This is a simple webpage.</p>
```

#### what do we think each on these class thing do ?

Tailwind has pretty straight forward naming system for styling.  Changing the text color `text-[color]-[intensity]` or making the background blue is `bg-blue-500`. There is a million billion styles that I cannot teach (idk them all either) but Ill typically reference the tailwind documentation site and its easy to find what you trying to do.

### small cheat sheet
## Tailwind CSS Mini Cheat Sheet

### 📏 Spacing
- `m-4` → margin: 1rem  
- `mt-2` → margin-top  
- `p-6` → padding: 1.5rem  

### 🎨 Colors
- `bg-blue-500` → background color  
- `text-gray-600` → text color  
- `hover:bg-blue-600` → hover state  

### 🔤 Text & Font
- `text-sm`, `text-lg`, `text-2xl` → font sizes  
- `font-bold`, `font-light` → font weight  
- `text-center`, `text-left` → alignment  

### 📦 Layout
- `flex`, `grid` → layout systems  
- `justify-center`, `items-center` → flexbox alignment  
- `max-w-sm`, `w-full` → width control  

### 🎨 Borders & Rounding
- `rounded-lg`, `rounded-full` → rounded corners  
- `border`, `border-gray-300` → border style  

### 🌑 Effects
- `shadow`, `shadow-lg` → box shadows  
- `opacity-50` → transparency  

---

✨ **Tip:** Combine classes to style quickly:  
```html
<button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
  Click Me
</button>
