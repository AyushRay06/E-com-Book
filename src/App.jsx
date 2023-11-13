function Book(props) {
  return (
    <article className="book">
      <img className="image" src={props.bannerImage} />
      <h1>{props.comicName}</h1>
      <h3>{props.brand}</h3>
      <p></p>
    </article>
  );
}

export default Book;

//ANOTHER WAY TO WRITE THE SAME CODE
// IN THIS METHOR WE ARE DESTROING OBJET KEY

/*function Book(props) {
  const { bannerImage, name, brand } = props;
  return (
    <article className="book">
      <img className="image" src={bannerImage} />
      <h1>{name}</h1>
      <h3>{brand}</h3>
      <p></p>
    </article>
  );
}

export default Book;
*/
