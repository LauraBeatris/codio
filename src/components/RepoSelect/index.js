import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSort, FaCodeBranch, FaCloudDownloadAlt } from 'react-icons/fa';
import {
  SelectContainer,
  CloneOrDownload,
  DownloadOrCloneContainer,
} from './styles';

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
      <FaCodeBranch color={textColor} class="download-icon" size="20" />
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

export function DownloadOrClone({
  backgroundColor,
  textColor,
  borderColor,
  text,
  options,
}) {
  const [step, setStep] = useState('');
  const [active, setActive] = useState(false);
  return (
    <DownloadOrCloneContainer>
      <SelectContainer
        class="select-wrapper"
        backgroundColor={backgroundColor}
        onClick={() => setActive(!active)}
        textColor={textColor}
        borderColor={borderColor}
      >
        <FaCloudDownloadAlt color={textColor} class="download-icon" size="20" />
        <p>{text}</p>
        <FaSort color={textColor} class="select-icon" size="20" />
      </SelectContainer>
      <CloneOrDownload className="clone-or-download" active={active}>
        <p> teste </p>
      </CloneOrDownload>
    </DownloadOrCloneContainer>
  );
}

RepoSelect.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
