const baseUrl=import.meta.env.VITE_API_BASE_URL

export const getAll= async<T> (endpoint:string) => {
  const fetchAll= await fetch(`${baseUrl}${endpoint}`)
    .then(res => res.json())
  return fetchAll as T;
}

