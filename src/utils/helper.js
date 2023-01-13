export const mergeNames = (data) => {
  if (data.first_name && data.last_name) {
    return {
      ...data,
      name: `${data.first_name} ${data.last_name}`,
    };
  }
  return data;
};

export function getInitials(name) {
  const names = name.split(" ");
  let initials = "";
  for (let i = 0; i < names.length; i++) {
    initials += names[i].charAt(0).toUpperCase();
  }
  return initials;
}
