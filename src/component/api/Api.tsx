import { MarkerType } from "../interface/MarkerTypeInterface";

const PLACE_RADIUS = 2500;
const TYPE = 'restaurant';

export const fetchNearRestaurant = async (lat: number, lng: number): Promise<MarkerType[]> => {
    const response = await fetch(`https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=${lat}%2C${lng}&type=${TYPE}&radius=${PLACE_RADIUS}&language=en`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "trueway-places.p.rapidapi.com",
            "x-rapidapi-key": "376841c8eemshcbfa17161c3aa2cp1652f1jsn37b333be6f70"
        }
    })
    if(!response.ok){
        throw new Error("Something Wrong!");
    }
    
    const data = await response.json();
    return data.results;
}