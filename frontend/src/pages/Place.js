import { AdminPanelSettings } from "@mui/icons-material"
import axios from "axios"
import React, { useEffect } from "react"
import { useParams } from "react-router-dom"


const Place = () => {

    const {id} = useParams()
    const [place, setPlace] = React.useState(null)
    useEffect(() => {
        axios.get(`http://localhost:8000/api/place/${id}`)
        .then ((res) => {
            if (res.status == 200) {
                console.log(res.data)
                setPlace(res.data)
            } else
                alert('backend is not online')
        })
    }, [])


    return (
        <h1>
        {place.id}
        {place.district}
        </h1>
    )
}

export default Place