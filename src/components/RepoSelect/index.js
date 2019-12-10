import React from 'react';
import PropTypes from 'prop-types';
import { FaSort, FaCloudDownloadAlt } from 'react-icons/fa';
import { SelectContainer, Select } from './styles';

export default function RepoSelect({
  backgroundColor,
  textColor,
  borderColor,
  text,
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
      <Select>
        <option value="0">Select car:</option>
        <option value="1">Audi</option>
        <option value="2">BMW</option>
        <option value="3">Citroen</option>
        <option value="4">Ford</option>
        <option value="5">Honda</option>
        <option value="6">Jaguar</option>
        <option value="7">Land Rover</option>
        <option value="8">Mercedes</option>
        <option value="9">Mini</option>
        <option value="10">Nissan</option>
        <option value="11">Toyota</option>
        <option value="12">Volvo</option>
      </Select>
    </SelectContainer>
  );
}

RepoSelect.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
