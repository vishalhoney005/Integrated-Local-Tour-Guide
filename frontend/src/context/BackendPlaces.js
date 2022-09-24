import { LocalConvenienceStoreOutlined } from '@mui/icons-material';
import { createContext, useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import csvPlaces from 'data/Places.csv'

const BackendPlacesContext = createContext({});

export const BackendPlacesProvider = ({children}) => {

    const [places, setPlaces] = useState([]);
    const navigate            = useNavigate();
    const [values, setValues] = useState([])

    const update_places_from_file = () => {
    };

    useEffect(() => {

        update_places_from_file()
        navigate('/')

    }, [])


    return (
        <BackendPlacesContext.Provider value={{
            places
        }}>
            {children}
        </BackendPlacesContext.Provider>
    )
}

export default BackendPlacesContext;
