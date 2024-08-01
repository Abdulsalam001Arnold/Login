import React, { useState, useEffect } from 'react';
import Instaload from '../components/instaload';
import Forgotinsta from '../components/forgotinsta';



export default function Forgotinstagram() {
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
            <Forgotinsta/>
        </div>

    )
}