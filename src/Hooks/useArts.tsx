"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';



const useArts = () => {
    const [artsList, setArtsList] = useState<Array<any>>([]);

    
      
    useEffect(() => {
      getArt();
    },[]);
  
    const getArt = () => {
      GlobalApi.getArt().then((resp: { data: { data: Array<any> } }) => {
        console.log(resp.data.data);
        setArtsList(resp.data.data);
      });
    }

    return artsList;
}



export default useArts;