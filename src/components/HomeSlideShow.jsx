import {useEffect, useState} from "react";
import destaquesInfo from "../assets/json/destaques.json";

function HomeSlideShow(){



    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval= setInterval(() => {
            slideHandler(1);
        }, 5000);
        return() => {
            clearInterval(interval);
        };
    }, )


    const imagePath = destaquesInfo.destaques.map(a => a.imagens);

    const slideHandler = (num) => {
        let newIndex = index + num;
        if (newIndex >= imagePath.length)
            newIndex = 0;
        if (newIndex < 0)
            newIndex = imagePath.length - 1;
        setIndex(newIndex);
    }

    return(
        <div id="destaque">
            <input onClick={() => slideHandler(-1)} id="left" type="submit" value="&#129092;"/>
            <img id="slideshow" src={imagePath[index]} alt="Destaque Sol da Caparica 2024"/>
            <input onClick={() => slideHandler(1)} id="right" type="submit" value="&#129094;"/>
        </div>
    )
}

export default HomeSlideShow;