import {HEADER_COLUMNS_MAP} from '../utils/SWAPIKeys'
import type {ApiEndpoints} from '../utils/SWAPIKeys'

export type ActionTypes = {
    type: 'changeCurrentPage' |  'saveEndpointResults' 
    | 'saveSearchEndpointResults' | 'removeFromList' | 'setRowsPerPage' 
    | 'setPagesCount' | 'setEnpoint' | 'searchLocal' | 'changeTheme' 
    | 'resetEndpoint' | 'searchEndpoint' | 'clearLoader' | 'closeModal' | 'toggleModal' ;
    payload: {
       value: any;
       loading?: boolean;
    }
}
export const initialState = {
    results:[] as any[],
    keys: HEADER_COLUMNS_MAP.people,
    endpoint: {
        slug: '' as ApiEndpoints,
        reset: false,
        search: "" as any
    },
    themeDark: false,
    searchPool: [] as any[],
    rowsPerPage: 10,
    pagesCount: 0,
    currentPage: 1,
    loading: false,
    modal: {
        delete: false,
        details: false
    }
}
export default  function globalReducer(state: typeof initialState, {type, payload: {value}}: ActionTypes)  {
   
    switch(type) {
        case 'saveEndpointResults' : return {...state, results: value, searchPool: [...value], keys: HEADER_COLUMNS_MAP[state.endpoint.slug], loading: false} 
        case 'saveSearchEndpointResults' : return {...state, results: value, currentPage: 1, endpoint: {...state.endpoint, search: ''}, loading: false}
        case 'resetEndpoint' : return {...state, endpoint: {...state.endpoint,reset: !state.endpoint.reset}, loading: true}
        case 'searchLocal' : return {...state, results: value}
        case 'searchEndpoint' : return {...state, endpoint: { ...state.endpoint, search: value}}
        case 'changeCurrentPage' : return {...state, currentPage: state.currentPage + value}
        case 'removeFromList' : return removeFromListHandler(state, value);
        case 'setRowsPerPage' : return {...state, rowsPerPage: value, currentPage: 1}
        case 'setPagesCount' : return {...state, pagesCount: value}
        case 'setEnpoint' : return {...state, endpoint: {...state.endpoint, slug: value}, currentPage: 1, loading: true}
        case 'changeTheme' : return {...state, themeDark: value}
        case 'toggleModal' : return {...state, modal: {...state.modal, ...value }}
        // case 'openModal' : return {...state, modal: {...state.modal, ...value }}
        default: throw Error('invalid action type');
    }
}


function removeFromListHandler(state: typeof initialState, { isRemote, rowToRemove }: { isRemote: boolean, rowToRemove: number } ) {
    const updatedSearchPool = [...state.searchPool];
    !isRemote && updatedSearchPool.splice(rowToRemove, 1); 
 
    const updatedResults = [...state.results];
    updatedResults.splice(rowToRemove, 1); 
    return {...state, results: updatedResults, searchPool: [...updatedSearchPool]}
}