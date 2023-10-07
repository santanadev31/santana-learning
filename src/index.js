import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const firstBook = {
  title: 'Interesting Facts For Curious Minds',
  author: 'Jordan Moore',
  img: 'https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg'
};

const secondBook = {
  title: 'Holly',
  author: 'Stephen King',
  img: 'https://images-na.ssl-images-amazon.com/images/I/815oQ6G6HDL._AC_UL600_SR600,400_.jpg'
}

function BookList() {
  return (
    <section className='booklist'>
      <Book image={firstBook.img} author={firstBook.author} title={firstBook.title} />
      <Book image={secondBook.img} author={secondBook.author} title={secondBook.title} />
    </section>
  );
}

/* const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author.toUpperCase()}</h4>

    </article>
  )
} */


const Book = ({ author, image, title }) => {
  return (
    <article className='book'>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);