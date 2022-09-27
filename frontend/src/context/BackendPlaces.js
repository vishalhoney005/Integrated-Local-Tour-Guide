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
                setPlaces(data)
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
            places, navigate, 
        }}>
            {children}
        </BackendPlacesContext.Provider>
    )
}

export default BackendPlacesContext;
