import React from 'react'
import PageLayout from './PageLayout';


   
const Hompage:React.FC = () => {


return (

    <PageLayout pageType='default'>
        <h1
            className='homeBanner'
        >Welcome to PowerOn Gaming</h1>
        <img src="/images/banner2.png" alt="" />

        <button className='defaultBtn mx-8 mt-3'>Show Now</button>

    </PageLayout>

    );
};
   
   export default Hompage;