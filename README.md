# 🔥 input-mask-react

In an extremely simple way, apply any input mask to your React project.

---

## 🚀 About

input-mask-react is a package for react with the aim of giving freedom to the developer to apply any input mask he wants!

## 🛠 Get Started

### install the input-mask-react

```bash
npm install input-mask-react-7
```

### Import the package

```jsx
import { InputMask } from 'input-mask-react-7'
```

### Example of use

In the example below, an input tag was created with a CPF mask in the Brazilian standard.

```jsx
<InputMask
  ref={inputRef}
  maxLength={14}
  cb={(event) => console.log(event)}
  masks={[
    { index: 3, caracter: '.' },
    { index: 7, caracter: '.' },
    { index: 11, caracter: '-' },
  ]}
/>
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

---
