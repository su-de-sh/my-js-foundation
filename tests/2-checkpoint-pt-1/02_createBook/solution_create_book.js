/* eslint-disable no-unused-vars, no-prototype-builtins */
function createBook(id, title, author, price, rating = []) {
  const obj = {
    id,
    title,
    author,
    price,
    rating: [],
    getInfo() {
      return `${title} by ${author}`;
    },
    getPrice() {
      return this.price;
    },
    addRating(stars) {
      this.rating.push(stars);
    },
    getRating() {
      return (
        this.rating
          .map((n) => {
            return n.length;
          })
          .reduce((a, b) => {
            return a + b;
          }) / this.rating.length
      );
    },
  };
  const obj1 = Object.create(obj);

  obj1.id = id;
  obj1.title = title;
  obj1.author = author;
  obj1.rating = rating;
  obj1.price = price;
  return obj1;
}
