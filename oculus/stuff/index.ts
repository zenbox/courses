const path = require("path");
const styles = require("./styles.css");

function paragraph(_e: string, _t: string) {
  const node = document.createElement(_e);
  const text = document.createTextNode(_t);

  node.appendChild(text);
  node.classList.add("default");

  return node;
}

document
  .querySelector("main>article")
  .appendChild(
    paragraph(
      "p",
      "Cras Typescript justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod."
    )
  );
