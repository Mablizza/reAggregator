import { useState } from "react"

export default function SearchPanel({ onFilterChange }){
    const [inputs, setInputs] = useState({
        precioMin: 0,
        precioMax: 1000000,
        Provincia: "Todas",
        tipo: "Todo"
    });

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
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
            <select name="Provincia" value={inputs.Provincia} onChange={handleChange}>
                <option value="Todas"  name="Todas" >Todas</option>
                <option value="Alajuela"  name="Alajuela" >Alajuela</option>
                <option value="San José" name="San José" >San José</option>
                <option value="Heredia" name="Heredia" >Heredia</option>
                <option value="Cartago" name="Cartago" >Cartago</option>
                <option value="Puntarenas" name="Puntarenas" >Puntarenas</option>
                <option value="Limón" name="Limón" >Limón</option>
                <option value="Guanacaste" name="Guanacaste" >Guanacaste</option>
            </select>
        </label>
        <br/>
        <label> Tipo:
            <select name="tipo" value={inputs.tipo} onChange={handleChange}>
                <option value="Todo"  name="Todo" >Todo</option>
                <option value="Terreno" name="Terreno" >Terreno</option>
                <option value="Vehículo" name="Vehículo" >Vehículo</option>
                <option value="Casa" name="Casa" >Casa</option>
                <option value="Comercial" name="Comercial" >Comercial</option>
                <option value="Otro" name="Otro" >Otro</option>
            </select>
        </label>
        <br/>
        <input className="submit-btn" type="submit" value="Buscar"/>
      </form>
    </div>
    )
}