import type { ApiEndpoints } from "../utils/SWAPIKeys";

export  async function fetchData(endpoint: ApiEndpoints, search?: string) {

    const allResults: any[] = [];
    if (!endpoint) return allResults;
    let url;
    url = search ? `https://swapi.py4e.com/api/${endpoint}?search=${search}` :
    `https://swapi.py4e.com/api/${endpoint}`;

    while (url) {
        const response = await fetch(url) as Response;
        const data = await response.json();
      
        if ( Array.isArray(data.results) && search) {
            for (let entry of data.results) {
                entry.remote = true;
            }
        } 
        Array.isArray(data.results) && allResults.push(...data.results);
        url = data.next;
    }
        return allResults;  
} 