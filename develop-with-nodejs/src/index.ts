import * as style from './style.css';

function paragraph() {
  const node = document.createElement("p");
  const text = document.createTextNode(
    "Typescript ipsum dolor sit consectetur ad piscit Maecenas faucibus mollis interdum."
  );

  node.appendChild(text);

  return node;
}

document.body.appendChild(paragraph());
