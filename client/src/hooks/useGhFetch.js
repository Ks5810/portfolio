/**
 * useGhFetch.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

import { useEffect, useLayoutEffect, useState } from 'react';
import axios from "axios";
import { requestConfig } from "../lib";


export const useGhFetch = () =>
{
    const [ ghFetch, setGhFetch ] = useState({
        loading: false,
        error: false,
        complete: false,
        fetched: false,
    });
    
    useEffect(() =>
    {
        let unmounted = false;
        const fetchGhData = async() =>
        {
            setGhFetch(prevState => ({ ...prevState, loading: true, }));
            try
            {
                if(!unmounted)
                {
                    const tmp = await axios.get("/api/gh", requestConfig());
                    let data = {
                        avatarUrl: "",
                        bio: "",
                        bioHTML: "",
                        email: "",
                        projects: [],
                    };
                    if(tmp.data)
                    {
                        
                        const { user } = tmp.data;
                        const { edges } = user.pinnedItems;
                        const projects = edges.map(edge => edge.node);
                        data = { ...user, projects };
                    }
                    await setGhFetch(prevState => ({
                        ...prevState,
                        data: data,
                        loading: false,
                        complete: true,
                        fetched: true
                    }));
                }
            } catch(error)
            {
                if(!unmounted)
                {
                    
                    setGhFetch(prevState => ({
                        ...prevState,
                        error: error.response,
                        loading: false,
                        complete: true,
                    }));
                }
            }
        };
        fetchGhData();
        return () => unmounted = true
    }, []);
    
    return ghFetch;
}