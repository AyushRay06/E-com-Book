import React from "react";
import ReactDOM from "react-dom/client";
import Book from "./App";
import "./main.css";

//BOOK ELEMENTS//
const firstBook = {
  name: "Spider-Venom",
  brand: "MARVEL",
  bannerImage:
    "https://www.freaksugar.com/wp-content/uploads/2021/04/fcbd_asm_0.jpg",
};

const secondBook = {
  name: "the AMAZING SPIDER-MAN",
  brand: "DC",
  bannerImage:
    "https://hips.hearstapps.com/digitalspyuk.cdnds.net/12/47/comics_amazing_spiderman.jpg?resize=980:*",
};

const thirdBook = {
  name: "BAT MAN",
  brand: "MARVEL",
  bannerImage:
    "https://m.media-amazon.com/images/I/91fCA7sK8mL._AC_UF1000,1000_QL80_.jpg",
};

const forthBook = {
  name: "PUNISHER",
  brand: "MARVEL",
  bannerImage:
    "https://preview.redd.it/what-writers-make-the-best-punisher-comics-v0-8wcy1dwljcba1.jpg?auto=webp&s=f5ca02e519cf7c58607f00a6da221a1493b7d118",
};

const fifthBook = {
  name: "DEADPOOL Kills The MARVEL universe",
  brand: "MARVEL",
  bannerImage: "https://i.redd.it/4053ifrcq4ba1.jpg",
};

const sixthBook = {
  name: "KING THOR",
  brand: "MARVEL",
  bannerImage:
    "https://freshcomics.s3.amazonaws.com/issue_covers/AUG198165.jpg",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <section className="booklist">
    <Book
      comicName={firstBook.name}
      brand={firstBook.brand}
      bannerImage={firstBook.bannerImage}
    />
    <Book
      comicName={secondBook.name}
      brand={secondBook.brand}
      bannerImage={secondBook.bannerImage}
    />
    <Book
      comicName={thirdBook.name}
      brand={thirdBook.brand}
      bannerImage={thirdBook.bannerImage}
    />
    <Book
      comicName={forthBook.name}
      brand={forthBook.brand}
      bannerImage={forthBook.bannerImage}
    />
    <Book
      comicName={fifthBook.name}
      brand={fifthBook.brand}
      bannerImage={fifthBook.bannerImage}
    />
    <Book
      comicName={sixthBook.name}
      brand={sixthBook.brand}
      bannerImage={sixthBook.bannerImage}
    />
  </section>
);
