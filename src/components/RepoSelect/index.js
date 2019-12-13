import React from 'react';
import PropTypes from 'prop-types';
import { FaSort, FaCloudDownloadAlt } from 'react-icons/fa';
import { SelectContainer } from './styles';

export default function RepoSelect({
  backgroundColor,
  textColor,
  borderColor,
  text,
  options,
}) {
  return (
    <SelectContainer
      class="select-wrapper"
      backgroundColor={backgroundColor}
      textColor={textColor}
      borderColor={borderColor}
    >
      <FaCloudDownloadAlt color={textColor} class="download-icon" size="20" />
      <p>{text}</p>
      <FaSort color={textColor} class="select-icon" size="20" />
      <select>
        {(options &&
          options.map(o => <option value={o.name}>{o.name}</option>)) || (
          <option value="teste">test</option>
        )}
      </select>
    </SelectContainer>
  );
}

RepoSelect.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
