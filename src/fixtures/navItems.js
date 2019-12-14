export const mainItems = [
  { name: 'Dashboard', active: '/dashboard/repositories' },
];

export const repositoryItems = (path, issues, pullRequests) => {
  return [
    { name: 'Code', active: path },
    { name: 'Issues', number: issues, active: `${path}/issues` },
    {
      name: 'Pull Requests',
      number: pullRequests,
      active: `${path}/pullrequests`,
    },
    { name: 'Wiki', active: false },
    { name: 'Insights', active: false },
  ];
};
