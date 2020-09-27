import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = (props) => {
  const { itemsNumber, itemsOnPage, currentPage, onPageSelect } = props;
  const numOfPages = Math.ceil(itemsNumber / itemsOnPage);
  if (numOfPages === 1) {
    return null;
  }
  const pages = _.range(1, numOfPages + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageSelect(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsNumber: PropTypes.number.isRequired,
  itemsOnPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageSelect: PropTypes.func.isRequired,
};

export default Pagination;
