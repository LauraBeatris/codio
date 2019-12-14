export const mainItems = [
  { name: 'Dashboard', active: '/dashboard/repositories' },
];

export const repositoryItems = (path, issues, pullRequests) => {
  return [
    { name: 'Code', active: path },
    { name: 'Issues', number: issues, active: false },
    { name: 'Pull Requests', number: pullRequests, active: false },
    { name: 'Wiki', active: false },
    { name: 'Insights', active: false },
  ];
};
