



import Trustwallet from "../components/trustwallet"
import React, { useState, useEffect } from 'react';
import Trustload from "../components/trustwalletload"



export default function Trustwalletlogin() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
  
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) {
      return <Trustload />;
    }
    return(
        <div className='w-full h-[100svh] relative'>
            <Trustwallet/>
        </div>
    )
}