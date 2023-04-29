import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Favoritos } from "./Favoritos"

export const Enrutador = () => {

    return(

        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Favoritos" element={<Favoritos />} />
            </Routes>
        </div>
    )
}