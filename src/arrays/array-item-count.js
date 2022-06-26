[5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce((res, cv) => {
  res[cv] ? ++res[cv] : (res[cv] = 1);
  return res;
}, {});
