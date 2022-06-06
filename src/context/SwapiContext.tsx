import  React, {createContext, useEffect, useReducer, useContext} from 'react'
import GlobalReducer, {initialState} from '../reducers/globalReducer'
import {fetchData} from '../hooks/useFetchSwapi'
import type {ActionTypes} from '../reducers/globalReducer'

type ContextValueType = [typeof initialState,  React.Dispatch<ActionTypes>]
  
export const SWAPIContext = createContext<ContextValueType>([initialState, ()=>{}]);

export const SwapiContextProvider = ({children}: {children: JSX.Element}) => {
    
    const [state, dispatch] = useReducer(GlobalReducer,initialState);

    
    useEffect(() => {
         (async function() {

            setTimeout(async() => {
                state.endpoint.slug && dispatch({type: 'saveEndpointResults', payload:  { value: await fetchData(state.endpoint.slug), loading: false }});
            },1000);
            
          })();
    }, [state.endpoint.slug, state.endpoint.reset]);

    useEffect(() => {
        (async function() {
            setTimeout(async() => {
                state.endpoint.search && dispatch({type: 'saveSearchEndpointResults', payload: { value: await fetchData(state.endpoint.slug, state.endpoint.search), loading: false }});
            },1000);
         })();
   }, [state.endpoint.search, state.endpoint.slug]);

    return <SWAPIContext.Provider value={[state, dispatch]}>{children}</SWAPIContext.Provider>
}

export function useGlobalContext() {
    return useContext(SWAPIContext);
}