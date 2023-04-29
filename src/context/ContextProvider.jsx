import { createContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "../componenets/NavBar";
import { Enrutador } from "../componenets/Enrutador";

export const ContextProvider = createContext({})

export const CtxProvider = () => {

    /* Se almacena la api en "personajes" */
    const [personajes , setPersonajes] = useState([]);

    /* Se almacenan los favoritos */
    const [favs , setFavs] = useState([]);

    /* Se trae la api de "Rick and Morty" y se añade el atributo "favorite" y se inicializa en "false" */
        useEffect(() => {
    
            document.title= "Rick and Morty";

            fetch("https://rickandmortyapi.com/api/character")

            .then((response) => response.json())
            .then((data) =>  setPersonajes(data.results.map(val => {

                return{...val , favorite: false}

            })))

        }, []);

        /* Se almacena card favorita y se almacena en "favs" */
        const handlerClick = (id) => {

            const favoritos = personajes.map((perso) => {

                if(perso.id === id){

                    return{...perso , favorite:true}
                }

                return perso
            })
            setPersonajes(favoritos)
            console.log(favoritos)
        }

    const contextValues = { personajes , handlerClick , favs , setFavs }

    return(

        <ContextProvider.Provider value={ contextValues }>
            <BrowserRouter>
                <NavBar/>
                <Enrutador/>
            </BrowserRouter>
        </ContextProvider.Provider>
    )
}