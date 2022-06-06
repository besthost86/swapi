
let timeout: NodeJS.Timeout ;
export const searchHandler = (e: React.ChangeEvent<HTMLInputElement>, results: any[], callback: (filtered: any[] | 'no results') => void) => {
    clearTimeout(timeout);

        let filtered;
        timeout = setTimeout(() => {

        let query: string[] | string = e.target.value.split("=");
        if ((query as string[]).some(el => el === "") || query.includes('=')) callback('no results');
       
        if (query.length === 1)  { 
        const value = query[0].toLowerCase();
          filtered = results.filter(rslt => rslt.name ? rslt.name.toLowerCase().startsWith(value) : rslt.title.toLowerCase().startsWith(value));
        } else {
        const key = query[0].toLowerCase();
        const value = query[1].toLowerCase();
        filtered = results.filter(rslt => rslt[key] ? rslt[key].toLowerCase().startsWith(value) : callback('no results'));
        }
        callback(filtered);
    }, 800)
  }