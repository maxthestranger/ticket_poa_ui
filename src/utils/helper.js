export const mergeNames = (data) => {
  if (data.first_name && data.last_name) {
    return {
      ...data,
      name: `${data.first_name} ${data.last_name}`,
    };
  }
  return data;
};
