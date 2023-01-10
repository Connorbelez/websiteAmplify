import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import darkParticleOptions from "../config/particlesDark.json";
import lightParticleOptions from "../config/particlesLight.json";
import amogus from "../config/particlesAMOGUS.json"
import HK from "../config/particlesHK.json"
const tsParticles = require("tsparticles-engine");




export function BG(props) {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
    let comp = props.comp;
    let theme = props.theme;
    console.log("THEME FROM BG: ",+theme);
    if(comp === "Home 💡"){
        if(theme){
            return (
                    
                    <Particles options={amogus} init={particlesInit} className="h-screen">
                    {comp}
                    </Particles>  
            );
        }else{
            return (
                <Particles options={lightParticleOptions} init={particlesInit} className='h-screen'>
                    {comp}
                </Particles>
            )
        }
    }else{
        return (
            <Particles options={HK} init={particlesInit} className='h-screen'>
                {comp}
            </Particles>
        )
    }
    
}

export default BG;
