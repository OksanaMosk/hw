const baseUrl = import.meta.env.VITE_API_BASE_URL;

const loadAll = async <T>(endpoint: string): Promise<T> => {
  return await fetch(`${baseUrl}${endpoint}`).then((data) => data.json());
};
export { loadAll };
