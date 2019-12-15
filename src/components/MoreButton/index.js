import React from 'react';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';
import { MoreButton, BackButton, Container } from './styles';

export default ({ handlePageChange, currentPage }) => {
  return (
    <Container>
      {currentPage > 1 && (
        <BackButton onClick={() => handlePageChange(false)}>
          Back
          <FaAngleDoubleLeft />
        </BackButton>
      )}
      <MoreButton onClick={() => handlePageChange(true)}>
        Next Page
        <FaAngleDoubleRight />
      </MoreButton>
    </Container>
  );
};
