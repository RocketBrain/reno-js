import React, { Component } from 'react'
// import { Link } from 'gatsby'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'

const LAT = 39.510430
const LNG = -119.805770

export default class Map extends Component {
  state = {
    viewport: {
      width: '100%',
      height: 400,
      latitude: LAT,
      longitude: LNG,
      zoom: 15.5,
    },
  }

  render () {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken='pk.eyJ1IjoiYnJlY2s0MjEiLCJhIjoiY2p2ZzJybjFiMDNjbTN5cDBzcWRqazRvZiJ9.LtnjLCf-VGOeHz33aTlovA'
        onViewportChange={(viewport) => this.setState({ viewport })}
      >
        <Marker
          longitude={LNG}
          latitude={LAT}
        >
          <MarkerPin size={20} onClick={() => this.setState({ popupInfo: true })} />
        </Marker>

        <Popup
          tipSize={5}
          anchor="top"
          longitude={LNG}
          latitude={LAT}
          closeOnClick={false}
          // onClose={() => this.setState({ popupInfo: null })}
        >
          <Popover />
        </Popup>
      </ReactMapGL>
    )
  }
}

const MarkerPin = (props) => {
  const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3 c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9 C20.1,15.8,20.2,15.8,20.2,15.7z`

  const pinStyle = {
    fill: '#157DFB',
    stroke: '#157DFB',
  }

  const { size = 20, onClick } = props

  return (
    <svg
      height={size}
      onClick={onClick}
      style={{ transform: `translate(${-size / 2}px,${-size}px)` }}
      viewBox="0 0 24 24"
    >
      <path style={pinStyle} d={ICON}/>
    </svg>
  )
}

const Popover = () => (
  <div>Rue Bourbon</div>
)
