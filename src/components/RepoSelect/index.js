import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FaSort,
  FaCodeBranch,
  FaCloudDownloadAlt,
  FaCopy,
} from 'react-icons/fa';
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
  keys,
}) {
  const [method, setMethod] = useState(true);
  const [active, setActive] = useState(false);

  const copyToClipboard = () => {
    const input = document.querySelector('.clone-method');

    // Selecting the text from the input field
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices

    /* Copy the text inside the input field */
    document.execCommand('copy');
  };

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
        <div>
          <strong className="method">
            {' '}
            {method ? 'Clone with HTTPS' : 'Clone with SSH'}
          </strong>
          <button
            type="button"
            className="change-method"
            onClick={ev => setMethod(!method)}
          >
            {method ? 'Use SSH' : 'Use HTTPS'}
          </button>

          <p>
            {' '}
            {method
              ? 'Use Git or checkout with SVN using the web URL.'
              : 'Use a password protected SSH key.'}{' '}
          </p>

          <div className="input-group">
            <input
              type="text"
              className="clone-method"
              name="clone-method"
              readOnly
              value={method ? keys.ssh : keys.https}
            />
            <button type="button" onClick={() => copyToClipboard()}>
              {' '}
              <FaCopy />{' '}
            </button>
          </div>
        </div>
        <a href={keys.download} target="_blank" rel="noopener noreferrer">
          {' '}
          Download ZIP{' '}
        </a>
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
