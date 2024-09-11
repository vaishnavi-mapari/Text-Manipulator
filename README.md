# Text Manipulator

A versatile and easy-to-use text manipulation tool that provides a variety of text processing functionalities such as case conversion, whitespace trimming, substring extraction, and text replacement.

## Features

- Convert text to uppercase, lowercase, title case, and more.
- Trim whitespace or special characters from text.
- Find and replace text patterns.
- Extract substrings based on patterns.
- Count words, characters, and lines.
- More customizable text operations.

## Installation

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/yourusername/text-manipulator.git
cd text-manipulator
```

Install the required dependencies:

```bash
# For Python projects, if using pip:
pip install -r requirements.txt

# For Node.js projects, if using npm:
npm install
```

## Usage

### Basic Example

```python
# Python usage example
from text_manipulator import TextManipulator

manipulator = TextManipulator("Hello World")
manipulator.to_uppercase()  # Output: "HELLO WORLD"
manipulator.replace_text("World", "Universe")  # Output: "Hello Universe"
```

```js
// JavaScript usage example
const { TextManipulator } = require('text-manipulator');

const manipulator = new TextManipulator('Hello World');
manipulator.toUpperCase(); // Output: "HELLO WORLD"
manipulator.replaceText('World', 'Universe'); // Output: "Hello Universe"
```

## Commands

### Available Methods

- `to_uppercase()`: Convert text to uppercase.
- `to_lowercase()`: Convert text to lowercase.
- `trim_whitespace()`: Trim whitespace from the beginning and end of the text.
- `replace_text(pattern, replacement)`: Replace text matching a pattern with a replacement.
- `count_words()`: Count the number of words in the text.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your ideas, improvements, or bug fixes.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
