import { useRef } from "react";
import {useState, useEffect, useCallback} from 'react'


export const useAsync = (
    getRandom,
    args = [],
    deps = [],
    imd = true
      ) => {
        const isFirsUpdate = useRef(true);


        const   [res, setRes] = useState(null),
                [error, setError] = useState(null),
                [loading, setLoading] = useState(false);


  const execute = useCallback(() => {

        setLoading(true);
        setError(null);
        setRes(null)

   return getRandom([...args])
      .then(info=>setRes(info))
      .catch((er)=> setError(er))
      .finally(()=> setLoading(false)) 
   },[args,getRandom]);


useEffect( () => {
    if(imd) {
        execute()
    } else {
        if(!isFirsUpdate.current) {
            execute()
        }
    }

},[...deps])


useEffect(() => {
    isFirsUpdate.current = false

},[])

return {execute,res,error,loading}


}