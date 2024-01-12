import React, { useState } from 'react';

const Pagination = ({ itemsPerPage, totalItems, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      <ul>
      {pageNumbers.map((number) => (
        <li key={number}>
            <button className={number === currentPage ? 'active' : ''} onClick={() => handleClick(number)}>{number}</button>
          </li>
      ))}
      </ul>
    </div>
  );
};

export default Pagination;

/* import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, onPageChange }) => {
  const numPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  return (
    <div>
      <ul>
        {Array.from({ length: numPages }, (_, i) => i + 1).map((page) => (
          <li key={page} className={number === currentPage ? 'active' : ''}>
            <button onClick={() => handlePageClick(page)}>{page}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination; */