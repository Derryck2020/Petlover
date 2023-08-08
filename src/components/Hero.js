import React from 'react';
import { useGlobalContext } from '../context';
import Loading from './Loading';

const Hero = () => {
   const { hero, loading } = useGlobalContext();

   // console.log(petList);
   if (loading) {
      return <Loading />;
   }
   return (
      <section className="hero-container">
         <div className="hero-center">
            <div className="img-container">
               <img src={img3} alt="Bird" />
            </div>
            <div className="hero-title">
               <h2>Pets</h2>
            </div>
         </div>
      </section>
   );
};

export default Hero;
