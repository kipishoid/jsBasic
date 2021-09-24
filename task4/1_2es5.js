"use strict";

function Post(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;
}
Post.prototype.edit = function (text) {
  this.text = text;
  console.log(this.text);
};

function AttachedPost(author, text, date) {
  Post.call(this, author, text, date);
  this.highlighted = false;
}
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
  this.highlighted = true;
  console.log(this.highlighted);
};

const newText = new AttachedPost('Виталий', 'Отмечает день рождения', '24.11.2021');
newText.edit("new text");
newText.makeTextHighlighted();
console.log(newText);