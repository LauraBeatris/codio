import React from 'react';
import PropTypes from 'prop-types';

import { FaFolder, FaFileAlt } from 'react-icons/fa';
import { GridContainer } from '../../styles/containers';
import { FileItemContainer } from './styles';

export function FileItem({ data }) {
  const { type, name, comment, date } = data;
  let icon;
  if (type === 'file') icon = <FaFileAlt size="19" />;
  if (type === 'dir') icon = <FaFolder size="19" />;
  return (
    <FileItemContainer>
      <div>
        {icon}
        <a href={data._links.html} target="_blank" className="file-name">
          {name}
        </a>
        <p className="commit-comment">{comment}</p>
      </div>

      <p className="commit-date">{date}</p>
    </FileItemContainer>
  );
}

export default function Files({ files }) {
  return (
    <GridContainer hasRows rowsNumber={files.length} rowLength="3rem">
      {files.map(file => (
        <FileItem data={file} />
      ))}
    </GridContainer>
  );
}

Files.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

FileItem.propTypes = {
  data: PropTypes.shape().isRequired,
};
