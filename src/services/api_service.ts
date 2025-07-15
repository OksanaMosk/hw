const baseUrl = import.meta.env.VITE_API_BASE_URL;

const loadUsers = async (page: string) => {
  const limit = 30;
  const skip = limit * +page - limit;
  console.log(`${baseUrl}/users?skip=${skip}`);
  return fetch(`${baseUrl}/users?skip=${skip}`).then((res) => res.json());
};
export { loadUsers };
