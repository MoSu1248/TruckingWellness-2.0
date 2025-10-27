import React from "react";

import "./Pagination.css";

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

  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <div key={index}>
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={page === currentPage ? "active-pag" : "pagination-btn-styling"}
            >
              {page}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
