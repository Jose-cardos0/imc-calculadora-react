import Buttom from "./Buttom";

import { useState } from "react";

import "./ImcCalc.css";

const ImCalc = ({calcImc}) => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const ClearForm = (e) => {
        e.preventDefault();
        setHeight("");
        setWeight("");
    };

    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "");
    }

    const handleHeightChange = (e) => {
        const updateValue = validDigits(e.target.value);
        setHeight(updateValue);
    }

    const handleWeightChange = (e) => {
        const updateValue = validDigits(e.target.value);
        setWeight(updateValue);
    }

  return (
    <div className="calc-container">
        <h2>Calculadora de IMC</h2>
        <form className="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height">Altura:</label>
                    <input type="text" name="height" id="height" placeholder="Exemplo 1,75" onChange={(e) => handleHeightChange(e)} 
                    value={height} />
                </div>
            </div>
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="weight">Peso:</label>
                    <input type="text" name="weight" id="weight" placeholder="Exemplo 70,5" onChange={(e) => handleWeightChange(e)} value={weight} />
                </div>
            </div>
            <div className="action-control">
                <Buttom id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weight)} />
                <Buttom id="clear-btn" text="Limpar" action={ClearForm} />
            </div>
        </form>
    </div>
  )
}

export default ImCalc