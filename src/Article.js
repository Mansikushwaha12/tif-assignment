import React, { useState } from 'react';
import './Article.css';
import card1 from './Assets/card1.png';
import card2 from './Assets/card2.png';
import card3 from './Assets/card3.png';
import card4 from './Assets/card4.png';
import card5 from './Assets/card5.png';
import card6 from './Assets/card6.png';
import leftArrow from './Assets/leftArrow.png';
import leftArrowD from './Assets/leftArrowD.png';
import rightArrow from './Assets/rightArrow.png';
import rightArrowD from './Assets/rightArrowD.png';

const Carousel = () => {
    const cardData = [
        { id: 1, title: 'Grilled  Tomatoes at Home', img: card1 },
        { id: 2, title: 'Snacks for Travel', img: card2 },
        { id: 3, title: 'Post-workout Recipes', img: card3 },
        { id: 4, title: 'How To Grill Corn', img: card4 },
        { id: 5, title: 'Crunchwrap Supreme', img: card5 },
        { id: 6, title: 'Broccoli Cheese Soup', img: card6 },
      ];
  const cardsPerPage = 3;
  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

 

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const visibleCards = cardData.slice(startIndex, endIndex);

  return (
    <div className='article'>
      <h1>Latest Article</h1>
      <div className='card'>
        {visibleCards.map((card) => (
          <div key={card.id} className='single-card'>
            <img src={card.img} alt='img' />
            <div className='card-description'>
              <h3>{card.title}</h3>
              <p>
                PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard...
              </p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>

      <div className='navigation'>
        <img
          src={currentPage === 1 ? leftArrow : leftArrowD}
          alt='left-arrow'
          onClick={handlePrevPage}
          className={`arrow ${currentPage === 1 ? 'disabled' : ''}`}
        />
        <span>{currentPage}/{totalPages}</span>
        <img
          src={currentPage === totalPages ? rightArrow : rightArrowD}
          alt='right-arrow'
          onClick={handleNextPage}
          className={`arrow ${currentPage === totalPages ? 'disabled' : ''}`}
        />
      </div>
    </div>
  );
};

export default Carousel;
