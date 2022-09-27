import { LocalConvenienceStoreOutlined } from '@mui/icons-material';
import { createContext, useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import csvPlaces from 'data/Places.csv'
import axios from 'axios'

const BackendPlacesContext = createContext({});

export const BackendPlacesProvider = ({children}) => {

    const navigate            = useNavigate();
    const [places, setPlaces] = useState([]);

    const getPlaces = async () => {
        await axios.post("http://localhost:8000/api/place/all")
        .then((response) => {
            if (response.status == 200) {
                const data = response.data;
                console.log(data)
                setPlaces(data)
            }
        })
    }

    const uploadPlace = async (e) => {

        e.preventDefault()
        const district = e.target.district.value;
        const city = e.target.city.value;
        const title = e.target.title.value;
        const rating = e.target.rating.value;
        const description = e.target.description.value;
        const image = e.target.image.value;
        const link = e.target.link.value
        
        await axios.post("http://localhost:8000/api/place/upload", {district: district, city: city, title: title, rating: rating, description: description, image: image, link: link})
        .then((res) => {
            if (res.status == 200)
            {
                alert(res.data)
                navigate('/')
            }
        })
    }

    useEffect(() => {
        
        // Grabbing all places info from the backend at once
        getPlaces()
        navigate('/')

    }, [])


    return (
        <BackendPlacesContext.Provider value={{
            places, navigate, uploadPlace
        }}>
            {children}
        </BackendPlacesContext.Provider>
    )
}

export default BackendPlacesContext;
