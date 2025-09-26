import React, { useState, useEffect } from 'react'
import PageLayout from './PageLayout';
import { Link } from 'react-router-dom'


   
const Hompage:React.FC = () => {

    const [visible, setVisible] = useState<boolean>(false)

     useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);


return (

    <PageLayout pageType='default'>
        <h1
            className={`homeBanner${visible ? ' visible' : ''}`}
        >Welcome to <strong>PowerOn</strong> Gaming</h1>
        <img src="/images/banner2.png" alt="" />

        <Link to='products' 
            className='defaultBtn mt-4 mx-8 inline-block'> 
            Show Now 
        </Link>

    </PageLayout>

    );
};
   
   export default Hompage;