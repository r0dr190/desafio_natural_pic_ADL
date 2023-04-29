import { useContext, useEffect } from "react"
import { ContextProvider } from "../context/ContextProvider"

export const Favoritos = () => {

    const { personajes , favs , setFavs } = useContext(ContextProvider)

    useEffect(() => {

        setFavs(personajes.filter(perso => perso.favorite === true))
    });

    console.log(favs)

    return(

        <div className="row-col-12">
            {
                favs ? favs.map((personaje) => {
                    return(
                        <div id='cards' className='cards row col-3 mt-2 ms-0 me-0'>
                            <div className="card bg-secondary" key={personaje.id}>
                                <img src={personaje.image} className="card-img-top" alt={personaje.name} />
                                <div className="card-body text-white">
                                    <h5 className="card-title text-center">{personaje.name}</h5>
                                    <p className="card-text m-0">Estatus: {personaje.status}</p>
                                    <p className="card-text m-0">Especie: {personaje.species}</p>
                                    <p className="card-text mt-0">Género: {personaje.gender}</p>
                                </div>
                            </div>
                        </div>                        
                    )
                }) : <p>Sin resultados</p>
            }
        </div>
    )
}