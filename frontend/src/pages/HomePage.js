import React, { useContext, useState } from 'react'
import { Carousel } from "react-carousel-minimal";
import { Link } from 'react-router-dom';
import ReactCardSlider from 'react-card-slider-component';
import BackendPlacesContext from 'context/BackendPlaces';

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

const placesInfo = [
    {image:"https://media-cdn.tripadvisor.com/media/photo-w/0e/4d/cd/a7/krishnapuram-palace.jpg",title:"Krishnapuram Palace",description:"Haripad", clickEvent:()=> console.log('click')},
    {image:"https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQluh09k764WMsJwRD5Ts6CYB23MF9fKjfOqlTAB1_k6OnA9MUNWQHIoQf2dLhjOJ0784EHVTHy_SVKmFwC4IFuoQ",title:"Cherai Beach",description:"Kochi",clickEvent:()=> console.log('click')},
    {image:"https://lh5.googleusercontent.com/p/AF1QipPio6Um9AnPE6htSB8TYO1SgzJShz-JOD0CD0WL=w408-h305-k-no",title:"Rajamal Hills",description:"Munnar",clickEvent:() => console.log('click')},
    {image:"https://lh5.googleusercontent.com/p/AF1QipMNI5aCwSzCD1UX0MTDRUthZePlKbm4bNnfwvdN=w520-h240-k-no",title:"Valiyaparamba",description:"Payyanur",clickEvent: () => console.log('click')},
    {image:"https://lh5.googleusercontent.com/p/AF1QipOzk4vrvEsatcQpGt8gbkcZp8ED8CKc9ETN_MkC=w411-h240-k-no",title:"TIllikkal Kallu",description:"Pala",clickEvent: () => console.log('click')},
    {image:"http://www.tripnight.com/public/uploads/monuments/5034/jAsQaqG1Pd6M.jpg",title:"Valiya Juma Masjid",description:"Ponnani",clickEvent:() => console.log('click')},
    {image:"https://lh5.googleusercontent.com/p/AF1QipOUGI8Hcje-MoRSlG-BKRThzYqAPp-0O3Dt-_to=w408-h306-k-no",title:"Veeramala Kunnu",description:"Nileshwaram", clickEvent:()=> console.log('click')},
    {image:"https://lh5.googleusercontent.com/p/AF1QipMHF3rBGI1H5JH0b4FsBsiRvNJ24ykEC2GaqdeX=w426-h240-k-no",title:"Maruthimala Eco Tourism",description:"Kottarakkara", clickEvent:()=> console.log('click')},
    {image:"http://www.tripnight.com/public/uploads/monuments/5034/jAsQaqG1Pd6M.jpg",title:"Valiya Juma Masjid",description:"Ponnani", clickEvent:()=> console.log('click')},
    {image:"https://upload.wikimedia.org/wikipedia/commons/a/a6/Palakkad_Fort.JPG",title:"Palakkad Fort",description:"Pattambi",clickEvent:()=> console.log('click')},
    {image:"https://www.ktexplorer.com/banner/post/1548329131-konni.jpg",title:"Konni Eco-Tourism Centre",description:"Konni",clickEvent:() => console.log('click')},
    {image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Sree_Padmanabhaswamy_Temple.JPG/2560px-Sree_Padmanabhaswamy_Temple.JPG",title:"Sree Padmanabhaswamy Temple",description:"Attingal",clickEvent:()=> console.log('click')},
    {image:"https://www.muzirisheritage.org/images/Kodungallur-Bhagavathi-Temp-L.jpg",title:"Kodungallur Bhagavathi Temple",description:"Guruvayur",clickEvent:() => console.log('click')},
    {image:"https://www.keralatourism.org/images/thalassery/static-banner/large/-17032020173502.jpg",title:"Pazhassi Raja Tomb",description:"Mananthavady",clickEvent:()=> console.log('click')},
    {image:"https://live-core-api.travalour.com/common/v1/thumbnail/0579688d-f131-4a72-9f8c-11d1f07a1c5b?format=webp&width=960",title:"Kadamakkudy Islands",description:"Kadamakudy",clickEvent:() => console.log('click')},
    {image:"https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/tyhyy419pw0ghftgs9uedy6pyb56_1550046978_7453270882_117ac0ca1d_k.jpg.jpg",title:"Varkala Beach",description:"Varkala",clickEvent: () => console.log('click')},
]




export default function Home() {

    const {places} = useContext(BackendPlacesContext)
    var reversePlacesInfo = placesInfo;

    return (
        <>
        <div class='m-10 space-y-4'>
            <div class='ml-40 w-1/6 '>
                <h1 class='text-left text-4xl font-light text-gray-500 '> Locations </h1>
            </div>
            <div class='ml-28 flex w-full'>
                <ReactCardSlider slides={placesInfo} />
            </div>
        </div>


        <div class='m-10 space-y-4'>
            <div class='ml-40 w-1/6 '>
                <h1 class='text-left text-4xl font-light text-gray-500 '> Recently viewed </h1>
            </div>
            <div class='ml-28 flex w-full'>
            
                <ReactCardSlider slides={reversePlacesInfo} />
            </div>
        </div>

        </>
    );
}


