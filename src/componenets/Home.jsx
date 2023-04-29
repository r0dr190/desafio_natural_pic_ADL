import { useContext } from "react"
import { ContextProvider } from "../context/ContextProvider"

export const Home = () => {

    const { personajes , handlerClick } = useContext(ContextProvider)

    return(

        <div className="row-col-12">
            {
                personajes.map((personaje) => {
                
                    return(
                        <div id='cards' className='cards row col-3 mt-2 ms-0 me-0'>
                            <div className="card bg-secondary" key={personaje.id}>
                                <img src={personaje.image} className="card-img-top" alt={personaje.name} />
                                <div className="card-body text-white">
                                    <h5 className="card-title text-center">{personaje.name}</h5>
                                    <p className="card-text m-0">Estatus: {personaje.status}</p>
                                    <p className="card-text m-0">Especie: {personaje.species}</p>
                                    <p className="card-text mt-0">Género: {personaje.gender}</p>
                                    <button onClick={() => handlerClick(personaje.id) }  className="btn btn-primary">Favorito ♥</button>
                                </div>
                            </div>
                        </div>                        
                    )
                })
            }
        </div>
    )
}