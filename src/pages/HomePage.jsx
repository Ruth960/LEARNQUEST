import NavBar from  '../components/NavBar';
import HeroSection from '../components/HeroSection';
import React from 'react';
import LearningMaterial from '../components/LearningMaterials';

export default function  HomePage(){

    return(
        <div>
            <NavBar />
            <HeroSection />
            <LearningMaterial />   
        </div>

    )
}