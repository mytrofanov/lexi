import "./styles.css";
import {createEditor} from 'lexical';

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const config = {
    namespace: 'MyEditor',
    theme: {
        ltr: 'ltr',
        rtl: 'rtl',
        placeholder: 'editor-placeholder',
        paragraph: 'editor-paragraph',
    },
    onError: console.error
};

const editor = createEditor(config);

const contentEditableElement = document.getElementById('editor');

editor.setRootElement(contentEditableElement);
