import { promerica } from "../dataBank/promerica_data"


export default function DisplayCards ({ filters }){
// Filter the cards based on the filters
    const filteredCards = promerica.filter( (card) => {
        // Convert price to number for comparison
        const cardPrice = parseFloat(card.price.replace(/[^0-9.-]+/g, ''));  //replace any non number digits in the price
        
        // Check price (range) match
        const isPriceInRange = 
            cardPrice >= parseFloat(filters.precioMin) && 
            cardPrice <= parseFloat(filters.precioMax);
        
        // Check province match
        const isProvinceMatch = 
            filters.provincia === "todas" || 
            card.location.toLocaleLowerCase().includes(filters.provincia);
        
        // Check type matches (need refinement in future)
        const isTypeMatch = 
            filters.tipo === "todo" || 
            card.type === filters.tipo.toLowerCase();
        
        // Return true if all filters match
        return isPriceInRange  && isProvinceMatch && isTypeMatch ;
    });
    
    // Map the filtered cards to components
    const mappedCards = filteredCards.map((x) => {
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
            </div>
        )
    });

    return (
        <div className="card-container">
            {mappedCards.length > 0 ? 
                mappedCards : 
                <p>No se encontraron propiedades que coincidan con los criterios de búsqueda.</p>
            }
        </div>
    )
}