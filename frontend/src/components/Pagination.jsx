import React, { Fragment, useState } from 'react';
import { createRange } from '../helpers/createRange';

import { PageMenu } from './Pagination.styles.js';

// fetches page numbers based on current page, total pages, and number of neighbors specified
const fetchPages = (totalPages, currentPage, neighbors) => {
  const numbers = neighbors * 2 + 3;
  const blocks = numbers + 2;

  if (totalPages > blocks) {
    const startPage = Math.max(2, currentPage - neighbors);
    const endPage = Math.min(totalPages - 1, currentPage + neighbors);
    let pages = createRange(startPage, endPage);

    const leftSpill = startPage > 2;
    const rightSpill = totalPages - endPage > 1;
    const spillOffset = numbers - (totalPages + 1);
    switch (true) {
      case leftSpill && !rightSpill: {
        const extraPages = createRange(startPage - spillOffset, startPage - 1);
        pages = ['LEFT-BTN', ...extraPages, ...pages];
        break;
      }
      case !leftSpill && rightSpill: {
        const extraPages = createRange(endPage + 1, endPage + spillOffset);
        pages = [...pages, ...extraPages, 'RIGHT-BTN'];
        break;
      }

      case leftSpill && rightSpill:
      default: {
        pages = ['LEFT-BTN', ...pages, 'RIGHT-BTN'];
        break;
      }
    }
    return [1, ...pages, totalPages];
  }

  return createRange(1, totalPages);
};

const Pagination = ({ totalItems, limit, neighbors, offset, setOffset }) => {
  // Total pages based on total items and page limit
  const [currentPage, setCurrentPage] = useState(offset / limit + 1);
  const totalPages = Math.ceil(totalItems / limit);
  const pages = fetchPages(totalPages, currentPage, neighbors, currentPage);

  const gotoPage = page => {
    setCurrentPage(page);
    setOffset((page - 1) * limit);
  };

  const moveLeft = e => {
    e.preventDefault();
    gotoPage(currentPage - neighbors * 2 - 1);
  };

  const moveRight = e => {
    e.preventDefault();
    gotoPage(currentPage + neighbors * 2 + 1);
  };

  return (
    <Fragment>
      <PageMenu>
        {pages.map((page, i) => {
          if (page === 'LEFT-BTN') {
            return (
              <li key={i}>
                <a onClick={moveLeft}>&laquo;</a>
              </li>
            );
          }

          if (page === 'RIGHT-BTN') {
            return (
              <li key={i}>
                <a onClick={moveRight}>&raquo;</a>
              </li>
            );
          }

          return (
            <li key={i} className={currentPage === page ? 'active' : ''}>
              <a onClick={() => gotoPage(page)}>{page}</a>
            </li>
          );
        })}
      </PageMenu>
    </Fragment>
  );
};

export default Pagination;
