const API_KEY="1164332f"
export  const fetchData=async(SEARCH_STRING,PAGE_NO)=>{
 return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${SEARCH_STRING}&page=${PAGE_NO}`,).then((res)=>{  
    return res.json()})
}
export const getdetails = async (id) => {
    return fetch(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`,).then((res)=>{  
        return res.json()})
}