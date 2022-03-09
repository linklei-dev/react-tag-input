# React Tag Input

React Tag Input is a robust, minimal and performant input field for creating multiple tags.

[See demo & documentation](https://betterstack.dev/projects/react-tag-input)

Branch LinkLei from original: https://github.com/pathofdev/react-tag-input


# Customizado para LinkLei

## Executar o exemplo

```sh
npm install
npm run build
npm run example
```

# Instalation

## para instalar via github:
* foi adicionado um script a mais em package.json ("prepare": "npm run build"), para rodar o build apos instalar via npm pelo github.
```sh
npm install git+https://github.com/linklei-dev/react-tag-input#master --save-dev
```

Install the component via NPM package manager

npm install --save @pathofdev/react-tag-input

```sh
npm install --save @pathofdev/react-tag-input
```

Import the compiled CSS in your bundle or copy the CSS file
```sh
import "@pathofdev/react-tag-input/build/index.css";
```

You can also import that raw SCSS file and override the variables inside. See towards the bottom of this page for a more detailed example.

```sh
@import "node_modules/@pathofdev/react-tag-input/src/styles/index.scss";
```

# Usage
The simplest working example looks like this.
```jsx
import React from "react";
import ReactDOM from "react-dom";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
function App() {
  const [tags, setTags] = React.useState(["example tag"])
  return (
    <ReactTagInput 
      tags={tags} 
      onChange={(newTags) => setTags(newTags)}
    />
  )
}
const root = document.getElementById("root");
ReactDOM.render(<App/>, root);
```

Below is an example of usage with all the available options

```jsx
<ReactTagInput 
  tags={tags} 
  placeholder="Type and press enter"
  maxTags={10}
  editable={true}
  readOnly={false}
  removeOnBackspace={true}
  onChange={(newTags) => setTags(newTags)}
  validator={(value) => {
    // Don't actually validate e-mails this way
    const isEmail = value.indexOf("@") !== -1;
    if (!isEmail) {
      alert("Please enter an e-mail address");
    }
    // Return boolean to indicate validity
    return isEmail;
  }}
/>
```

# Component props
<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>tags</td>
            <td>string[]</td>
            <td>yes</td>
            <td>A string array containing a list of tags</td>
        </tr>
        <tr>
            <td>onChange</td>
            <td>function</td>
            <td>yes</td>
            <td>A function that receives the updated tags, used to update your state</td>
        </tr>
        <tr>
            <td>onBlur</td>
            <td>function</td>
            <td>no</td>
            <td>A function thats receive event when input blur.</td>
        </tr>
        <tr>
            <td>useAnotherCharEnter</td>
            <td>string</td>
            <td>no</td>
            <td>String with character delimiter tag items.</td>
        </tr>
        <tr>
            <td>clearInputOnInvalid</td>
            <td>boolean</td>
            <td>no</td>
            <td>If true, set emtpy input field when value is invalid by validator.</td>
        </tr>
        <tr>
            <td>containerProps</td>
            <td>object</td>
            <td>no</td>
            <td>Properties for use in div container of component. Override another props.</td>
        </tr>
        <tr>
            <td>inputProps</td>
            <td>object</td>
            <td>no</td>
            <td>Properties for use in input element of component. Override another props.</td>
        </tr>
        <tr>
            <td>placeholder</td>
            <td>string</td>
            <td>no</td>
            <td>The placeholder for the inner input field, defaults to "Type and press enter"</td>
        </tr>
        <tr>
            <td>maxTags</td>
            <td>number</td>
            <td>no</td>
            <td>Set the maximum number of tags allowed. Once reached, the inner input field will be hidden. Defaults to
                undefined which is unlimited</td>
        </tr>
        <tr>
            <td>editable</td>
            <td>boolean</td>
            <td>no</td>
            <td>If enabled, a user can click a tag and change it's value directly. Defaults to false</td>
        </tr>
        <tr>
            <td>readOnly</td>
            <td>boolean</td>
            <td>no</td>
            <td>If enabled, tags cannot be edited or removed and the inner input field is hidden. Defaults to false</td>
        </tr>
        <tr>
            <td>removeOnBackspace</td>
            <td>boolean</td>
            <td>no</td>
            <td>If enabled, a user can delete a tag if they press backspace when focused on the inner input field or a
                specific tag input field. Defaults to false</td>
        </tr>
        <tr>
            <td>validator</td>
            <td>function</td>
            <td>no</td>
            <td>A function that receives a specific tag value that a user is attempting to add and returns a boolean
                indicating if it is valid. If invalid, the tag will not be added</td>
        </tr>
    </tbody>
</table>



```sh

```