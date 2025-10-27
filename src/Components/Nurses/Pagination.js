import React from "react";

import "./Pagination.css";
import Stack from '@mui/material/Stack';

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
  onPageChange,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const onNext = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage === pages) {
      return currentPage - 1; 
    }
  };

  return (
    <Stack>
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <div  key={index}>
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={page === currentPage ? "activepag" : ""}
            >
              {page}
            </button>
            </div>
        );
      })}
    </div>
      </Stack>
  );
};

export default Pagination;



