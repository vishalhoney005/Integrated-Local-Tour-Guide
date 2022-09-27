import React, { useContext, useEffect, useState } from 'react'
import { Carousel } from "react-carousel-minimal";
import { Link } from 'react-router-dom';
import ReactCardSlider from 'react-card-slider-component';
import BackendPlacesContext from 'context/BackendPlaces';
import { gridColumnsTotalWidthSelector } from '@material-ui/data-grid';
import axios from 'axios'


const Posters = [
  { title: 'Poster01', imageUrl: '#', link: <Home /> },
  { title: 'Poster02', imageUrl: '#', link: <Home /> },
  { title: 'Poster03', imageUrl: '#', link: <Home /> },
]

function CarouselOfPosters ({data}) {

    const captionStyle = {
        fontSize: "1.5em",
        fontWeight: "bold",
    };

    return (
        <div class="bg-black border-2 h-auto text-center w-full">
            <Carousel
                data={data}
                time={10000}
                width="100%"
                captionStyle={captionStyle}
                radius="10px"
                captionPosition="center"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
            />
      </div>
    )
};

const placeInfo = {
    image: '',
    title: '', 
    description: '',
    clickEvent: null
}

export default function Home() {

    const { places } = useContext(BackendPlacesContext)

    const [array, setArray] = useState([])

    const viewPlaces = async () => {
        await axios.post("http://localhost:8000/api/view/place")
        .then((response) => {
            if (response.status == 200) {
                const data = response.data;
                setArray(data)
                console.log(data)
            }
        })
    }


    useEffect(() => {
        viewPlaces()
    }, [])

    return (
        <>

        <div class='m-10 space-y-4'>
            <div class='ml-40 w-1/6 '>
                <h1 class='text-left text-4xl font-light text-gray-500 '> Locations </h1>
            </div>
            <div class='ml-28 flex w-full'>
                <ReactCardSlider slides={array} />
            </div>
        </div>

        <div class='m-10 space-y-4'>
            <div class='ml-40 w-1/6 '>
                <h1 class='text-left text-4xl font-light text-gray-500 '> Recently viewed </h1>
            </div>
            <div class='ml-28 flex w-full'>
                <ReactCardSlider slides={array} />
            </div>
        </div>

        </>
    );
}