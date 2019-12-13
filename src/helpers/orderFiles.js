export default files => {
  const orderedFiles = files.sort((a, b) => {
    if (
      a.name === 'src' ||
      a.name === 'public' ||
      a.name === '.github' ||
      a.name === 'helpers'
    ) {
      return -1;
    }
  });

  return orderedFiles;
};
