import React from 'react';
import PropTypes from 'prop-types';

import { FaFolder, FaFileAlt } from 'react-icons/fa';
import { FlexContainer } from '../../styles/containers';
import { FileItemContainer } from './styles';

export function FileItem({ data }) {
  console.log(data);
  const { type, name, comment, date } = data;
  let icon;
  if (type === 'file') icon = <FaFileAlt />;
  if (type === 'dir') icon = <FaFolder />;
  return (
    <FileItemContainer>
      <div>
        {icon}
        <p className="file-name">{name}</p>
        <p className="commit-comment">{comment}</p>
      </div>

      <p className="commit-date">{date}</p>
    </FileItemContainer>
  );
}

export default function Files({ files }) {
  return (
    <FlexContainer>
      {files.map(file => (
        <FileItem data={file} />
      ))}
    </FlexContainer>
  );
}

Files.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

FileItem.propTypes = {
  data: PropTypes.shape().isRequired,
};
