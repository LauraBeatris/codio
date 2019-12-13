export const sortFiles = files => {
  const sortedFiles = files.sort((a, b) => {
    if (
      a.name === 'src' ||
      a.name === 'public' ||
      a.name === '.github' ||
      a.name === 'helpers' ||
      a.name === 'static' ||
      a.name === 'pages' ||
      a.name === 'components' ||
      a.name === 'services' ||
      a.name === 'store' ||
      a.name === 'www'
    ) {
      return -1;
    }

    return 1;
  });

  return sortedFiles;
};

export const sortBranches = branches => {
  const sortedBranches = branches.sort((a, b) => {
    if (a.name === 'master') {
      return -1;
    }

    return 1;
  });

  return sortedBranches;
};
