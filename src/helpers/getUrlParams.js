const getUrlParams = (key, value, searchParams, ...forDelete) => {
  searchParams.set(key, value);

  forDelete.forEach(param => searchParams.delete(param));

  return searchParams;
};

export default getUrlParams;
