import React from 'react'
import PageLayout from './PageLayout';


   
const Hompage:React.FC = () => {


return (

    <PageLayout pageType='default'>
        <h1
            className='homeBanner'
        >Welcome to PowerOn Gaming</h1>
        <img src="/images/home-image.jpg" alt="" />

    </PageLayout>

    );
};
   
   export default Hompage;