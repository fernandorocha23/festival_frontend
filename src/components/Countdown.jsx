import {useEffect, useState} from "react";

const Countdown = () =>{

    const dataFestival = new Date("2025-08-14T21:30:00").getTime();

    const calcularDiferenca = () =>{
        const dataAtual = new Date().getTime();
        return dataFestival - dataAtual;
    }

    const[time, setTime] = useState(calcularDiferenca);

    useEffect(() => {
        const interval= setInterval(() => {
            setTime(calcularDiferenca());
        }, 1000);

        return() => {
            clearInterval(interval);
        };
    }, []);

// Extrair dias, horas, minutos e segundos –floor() serve para arredondar para baixo
    const getDias = () =>Math.floor(time / (1000 * 60 * 60 * 24));
    const getHoras = () => Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const getMinutos = () => Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const getSegundos = () =>  Math.floor((time % (1000 * 60)) / 1000);

    return(
        <section>
            <h3 id="tempo">Faltam {getDias()} dias {getHoras()} horas {getMinutos()} minutos e {getSegundos()} segundos para o maior festival deste verão!!</h3>
        </section>
    )
}

export default Countdown;