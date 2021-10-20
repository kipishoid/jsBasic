"use strict";

class Post1 {
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

class AttachedPost1 extends Post1 {
  constructor(author, text, date) {
    super(author, text, date);
    this.highlighted = false;
  }
  makeTextHighlighted() {
    this.highlighted = true;
  }
}

const newText1 = new AttachedPost1('Семен', 'Не отмечает день рождения', '01.10.2022');
newText1.edit("new text");
newText1.makeTextHighlighted();
console.log(newText1);