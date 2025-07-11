jQuery SameSize Plugin
======================

A lightweight jQuery plugin that automatically adjusts the height, width, or both for a group of elements so that they match the size of the largest element in the group.

## ✨ Features

- 🔸 Set same height across a group of elements
- 🔸 Set same width
- 🔸 Or set both using a single call
- 🔸 Simple, chainable, and lightweight

## 📦 Installation

Include jQuery and the plugin in your HTML:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="jquery.samesize.js"></script>
```

## 🛠️ Usage

```html
<div class="box">Short</div>
<div class="box">A bit longer</div>
<div class="box">This one is the longest of all boxes</div>
```

```js
$('.box').sameHeight();  // Makes all .box elements the height of the tallest
$('.box').sameWidth();   // Makes all .box elements the width of the widest
$('.box').sameSize();    // Makes all .box elements the same width and height
```

## 📘 API

`.sameHeight()` \
Sets the height of all selected elements to the height of the tallest one.

`.sameWidth()` \
Sets the width of all selected elements to the width of the widest one.

`.sameSize()` \
Sets both the height and width of all selected elements to the tallest and widest, respectively.

## 💡 Notes

- The plugin calculates dimensions based on the current size of the elements. If their size changes (e.g., due to dynamic content), you may need to call the function again.
- You can call these methods inside a `$(window).on('load')` or `$(window).resize()` handler if needed.

## ✅ Example with Resize Handling

```js
function adjustBoxes() {
    $('.box').sameSize();
}

$(window).on('load resize', adjustBoxes);
```

## 📄 License

MIT License — free to use, modify, and distribute.

## 🙌 Contributing

Pull requests are welcome!
