
import createClient from "../sanity";
let sanityQuery = (query, params) => createClient.fetch(query, params);

export const getSanBongInfo = ()=>{
    return sanityQuery(
        `*[_type == 'sanbong'] `)}


