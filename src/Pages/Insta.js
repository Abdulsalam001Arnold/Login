import React, { useState, useEffect } from 'react';
import Instaload from '../components/instaload';

import Insta from "../components/insta";

export default function Instagram(){
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
  
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) {
      return <Instaload />;
    }
    return(
        <div>
            <Insta/>
        </div>
    )
}