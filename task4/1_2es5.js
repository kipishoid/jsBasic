"use strict";

function Post(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;
}
Post.prototype.edit = function () {
  alert(`Введите текст ${this.text}`);
};

function AttachedPost(author, text, date, highlighted) {
  Post.call(this, author, text, date);
  this.highlighted = highlighted;
}
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.edit2 = function () {
  console.log(this.highlighted);
};



const newText = new AttachedPost('Виталий', 'Отмечает день рождения', '24.11.2021', false);
newText.edit();
newText.edit2();

console.log(newText);