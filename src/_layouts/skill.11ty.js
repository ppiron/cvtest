const fs = require("fs");

exports.render = function (data) {
  let thumbs = "";
  if (data.thumbnails !== []) {
    data.thumbnails.forEach((element) => {
      thumbs =
        thumbs +
        `
        <div class="icon">
        ${fs.readFileSync(`./src${element}`, "utf8")}
        </div>
        `;
    });
  }
  return `
        <p>${data.skilltype}</p>
        ${data.content}
        <div class="skills-icons">${thumbs}</div>
        `;
};
