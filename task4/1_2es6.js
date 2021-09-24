"use strict";

class Post {
  constructor(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
  }

  edit(text) {
    this.text = text;
    console.log(this.text);
  }
}

class AttachedPost extends Post {
  constructor(author, text, date) {
    super(author, text, date);
    this.highlighted = false;
  }
  makeTextHighlighted() {
    this.highlighted = true;
  }
}

const newText = new AttachedPost('Виталий', 'Отмечает день рождения', '24.11.2021');
newText.edit("new text");
newText.makeTextHighlighted();
console.log(newText);