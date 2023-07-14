# 🔥 input-mask-react

**In an extremely simple way, apply input masks to your React project.**

---

## 🚀 About

input-mask-react is a package for react that was created with the purpose of facilitating software development. Applying input masks is a common and often repetitive task, come to think of it, input-mask-react makes this process simpler for you.

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

The example below shows how to create a Brazilian phone mask. See that for the mask to be applied, inform the index and which character you want to add, and that's it, now you have an input mask!

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
        { index: 0, character: '+' },
        { index: 3, character: ' ' },
        { index: 4, character: '(' },
        { index: 7, character: ')' },
        { index: 8, character: ' ' },
        { index: 14, character: '-' },
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
    <td>Determine the maximum length of the input value. Characters added by the mask are also summed.</td>
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
