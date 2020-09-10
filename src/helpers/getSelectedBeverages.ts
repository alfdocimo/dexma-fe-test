export default (beverages) =>
  beverages.reduce((acc, value) => {
    return {
      ...acc,
      [value.name]: (acc[value.name] || 0) + 1,
      price: (acc.price || 0) + value.price,
    };
  }, []);
