import React from 'react';
import PropTypes from 'prop-types';
import {
  FaShareSquare,
  FaCodeBranch,
  FaTag,
  FaUserCheck,
} from 'react-icons/fa';
import { FileContainer } from './styles';

export default function FileItem({ item }) {
  // Setting the icon for the icon based on the title
  const getIcon = title => {
    let icon;
    const iconSize = '20';
    if (title === 'commits') icon = <FaShareSquare size={iconSize} />;
    if (title === 'branches') icon = <FaCodeBranch size={iconSize} />;
    if (title === 'releases') icon = <FaTag size={iconSize} />;
    if (title === 'contributors') icon = <FaUserCheck size={iconSize} />;

    return icon;
  };

  const { number, title } = item;
  const icon = getIcon(title);
  return (
    <FileContainer>
      {icon}
      <div>
        <strong>{number}</strong>
        <p>{title}</p>
      </div>
    </FileContainer>
  );
}

FileItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }).isRequired,
};
