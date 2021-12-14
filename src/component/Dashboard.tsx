import React, { FC, useState } from 'react'
import { Wrapper, LoadingView } from './styles/App.styles'
import { Marker, GoogleMap, InfoWindow, useJsApiLoader } from '@react-google-maps/api'
import { containerStyle, center, options } from './config/MapSettings'
import { useQuery } from 'react-query'
import { fetchNearRestaurant } from './api/Api'
import restaurantIcon from './image/restaurant.svg'
import { MarkerType } from './interface/MarkerTypeInterface';

const Dashboard: FC = () => {
      const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!
  })

  const mapRef = React.useRef<google.maps.Map<Element> | null>(null);

  const [ clickedPos, setClickedPos ] = React.useState<google.maps.LatLngLiteral>({} as google.maps.LatLngLiteral );

  const { data: nearByPositions, isLoading, isError } = useQuery([clickedPos.lat,clickedPos.lng], () => fetchNearRestaurant(clickedPos.lat,clickedPos.lng), {
    enabled: !!clickedPos.lat,
    refetchOnWindowFocus: false
  })

  // const [position, setPosition] = useState<any>('');
  // setPosition(nearByPositions);
  console.log(nearByPositions);

  const onLoad = (map: google.maps.Map<Element>): void => {
    mapRef.current = map;
  }

  const unMount = (): void => {
    mapRef.current = null;
  }

  const onMapClick = (e:google.maps.MapMouseEvent) => {
    setClickedPos({lat: e.latLng.lat(), lng: e.latLng.lng()});
  }

  const onMarkerClick = (marker: MarkerType) => console.log(marker);

  if(!isLoaded) return <div className="flex justify-evenly mt-2">The Map is Loading ...</div>

  return (
    <Wrapper>
      <div>Hello
          <p><img src={restaurantIcon} alt="" width="20"/></p>
      </div>
      <GoogleMap
        mapContainerStyle = {containerStyle}
        options= {options as google.maps.MapOptions}
        center = {center}
        zoom = {12}
        onLoad = {onLoad}
        onUnmount = {unMount}
        onClick={onMapClick}
      >

        {clickedPos.lat ? <Marker position={clickedPos} /> : null }
        
        {/* <Marker position={center} /> */}

        <>
        {nearByPositions?.map(marker => {
          <Marker
            key={marker.id}
            position={marker.location}
            // icon={restaurantIcon}
            onClick={() => onMarkerClick(marker)}
            
            icon={{
              url: restaurantIcon,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30)
            }}
          />
          
        })}
          </>

      </GoogleMap>
    </Wrapper>
  );
}

export default Dashboard;