

const baseUrl=import.meta.env.VITE_API_BASE_URL

const loadAll= async <T, >(endpoint:string):Promise<T>=> {
   return await fetch(`${baseUrl}${endpoint}`)
        .then(value=> value.json())
}
export {loadAll}
