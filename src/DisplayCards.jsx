import { promerica } from "../dataBank/promerica_data"


export default function DisplayCards (){
    
const mappedCards = promerica.map((x)=>{
    return (
    <div className="card" key={x.id}>
        <div>
            <img className="card-img" src={x.photo} alt={x.title.slice(0,7)} />
        </div>
        <div className="card-data">
            <h2>{x.title}</h2>
            <label>Promerica</label>
            <p>{x.location}</p>
            <h3>Precio: {x.price}</h3>
        </div>
    </div>)
})

console.log(promerica.map(x => x))

    return(
        <div className="card-container">
            {mappedCards}
        </div>
    )
}