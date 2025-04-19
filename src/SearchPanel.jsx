import { useState } from "react"

export default function SearchPanel( { onFilterChange, filters } ){

    const [inputs, setInputs] = useState({ ...filters });

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(prevValues => ({...prevValues, [name]: value}))
    //   console.log("f:handleChange", inputs)
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
    //   console.log("f:handleSubmit", inputs);
      onFilterChange(inputs);
    }

    return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <label className="label-rango-de-precio">Rango de Precio:
        <br/>
        <div className="price-min-max"> 
        <label className="label-price">Min.:
            <input 
                className="input-price"
                name="precioMin"
                type="number"
                value={inputs.precioMin} 
                onChange={handleChange}
            />
        </label>
        <label className="label-price">Max.:
            <input
                className="input-price" 
                name="precioMax"
                type="number"
                value={inputs.precioMax} 
                onChange={handleChange}
            />
        </label>
        </div>
        </label>
        {/* <br/> */}
        <label> Provincia:
            <select name="provincia" value={inputs.provincia} onChange={handleChange}>
                <option value="todas"  name="todas" >Todas</option>
                <option value="alajuela"  name="alajuela" >Alajuela</option>
                <option value="san josé" name="san josé" >San José</option>
                <option value="heredia" name="heredia" >Heredia</option>
                <option value="cartago" name="cartago" >Cartago</option>
                <option value="puntarenas" name="puntarenas" >Puntarenas</option>
                <option value="limón" name="limón" >Limón</option>
                <option value="guanacaste" name="guanacaste" >Guanacaste</option>
            </select>
        </label>
        <br/>
        <label> Tipo:
            <select name="tipo" value={inputs.tipo} onChange={handleChange}>
                <option value="todo" name="todo" >Todo</option>
                <option value="terreno" name="terreno" >Terreno</option>
                <option value="vehículo" name="vehículo" >Vehículo</option>
                <option value="casa" name="casa" >Casa</option>
                <option value="comercial" name="comercial" >Comercial</option>
                <option value="otro" name="otro" >Otro</option>
            </select>
        </label>
        <br/>
        <input className="submit-btn" type="submit" value="Buscar"/>
      </form>
    </div>
    )
}