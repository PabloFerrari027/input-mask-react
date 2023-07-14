# 🔥 input-mask-react

In an extremely simple way, apply any input mask to your React project.

---

## 🚀 About

input-mask-react is a package for react with the aim of giving freedom to the developer to apply any input mask he wants!

## 🛠 Get Started

### install the input-mask-react

```bash
npm install input-mask-react
```

### Import the package

```jsx
import { InputMask } from 'input-mask-react'
```

### Example of use

The example below shows how to create a phone mask in the Brazilian standard.

```jsx
function App() {
  const inputRef = useRef(null)

  return (
    <InputMask
      ref={inputRef}
      maxLength={19}
      placeholder='+55 (12) 98765-4321'
      cb={(event) => console.log(event)}
      masks={[
        { index: 0, caracter: '+' },
        { index: 3, caracter: ' ' },
        { index: 4, caracter: '(' },
        { index: 7, caracter: ')' },
        { index: 8, caracter: ' ' },
        { index: 14, caracter: '-' },
      ]}
    />
  )
}

export default App
```

### Description of properties

<table>
  <tr>
    <th>Prop</th>
    <th>Required</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  
  <tr>
    <td>ref</td>
    <td>true</td>
    <td>HTMLInputElement</td>
    <td>Ref of the input that gives freedom to manipulate the input if necessary.</td>
  </tr>
  
  <tr>
    <td>maxLength</td>
    <td>true</td>
    <td>Number</td>
    <td>Determine o comprimento máximo do valor de entrada. Os caracteres adicionados pela máscara também são somados.</td>
  </tr>

  <tr>
    <td>cb</td>
    <td>false</td>
    <td>Function</td>
    <td>Receive event via callback function on input change.</td>
  </tr>

  <tr>
    <td>masks</td>
    <td>true</td>
    <td>
      {
        index: number;
        caracter: string;
      }[]
    </td>
    <td>
    An array of objects where the index represents the position of the string you want to assign a character to.
    </td>
  </tr>

</table>

> <code style="color: red">Note:<code/> The character field only accepts characters, and only one per index.

---
