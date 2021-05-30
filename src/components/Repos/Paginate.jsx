import React from 'react';
import ReactPaginate from 'react-paginate';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

export const Paginate = ({pagesCount, changePage}) => {
  return (
    <ReactPaginate
      previousLabel={<LeftOutlined />}
      nextLabel={<RightOutlined />}
      breakLabel={'...'}
      pageCount={pagesCount}
      onPageChange={changePage}
      marginPagesDisplayed={1}
      pageRangeDisplayed={4}
      containerClassName={'paginationBttns'}
      previousLinkClassName={'previousBttn'}
      nextLinkClassName={'nextBttn'}
      disabledClassName={'paginationDisabled'}
      activeClassName={'paginationActive'}
    />
  );
};
