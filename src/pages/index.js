import React, { Component, PureComponent } from 'react'
import { Link } from 'gatsby'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'

import Layout from 'components/Layout'
import Image from 'components/Image'
import SEO from 'components/Seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ padding: 50 }}>
      <p>The sole purpose of RenoJS is to find, grow, and strengthen the web community in our region and ultimately this city.</p>

      {/* <Image name="RenoJS.png" /> */}
      {/* <Link to="/page-2/">Go to page 2</Link> */}
      <div>
        <h2>Reoccurring Regional Events</h2>

        <ul>
          <li>
            <h3>BeerJS: Reno</h3>
            <p>We meet at 6:00pm PST on the second Thursday of the month every month.  Our home:</p>
            <p>
              <Map />
              <address>
                <a href="https://www.ruebourbonreno.com">Rue and Bourbon</a><br />
                1401 S Virginia St<br />
                Reno, NV
              </address>
            </p>
            {/* <p>Sponsors: </p> */}
          </li>
          <li>
            <h3>BeerJS: Tahoe</h3>
          </li>
        </ul>
      </div>

      <hr style={{ marginBottom: 100, marginTop: 100 }} />

      <div>
        <h2>Important links</h2>

        <ul>
          <li>
            <a href="https://beers-slack-invite.herokuapp.com" target="_blank" rel="noopener noreferrer">Join our slack channel</a>
          </li>
          <li>
            <a href="https://www.meetup.com/RenoJS" target="_blank" rel="noopener noreferrer">RenoJS Meetup.com</a>
          </li>
          <li>
            <a href="https://github.com/beerjs/reno" target="_blank" rel="noopener noreferrer">BeerJS: Reno</a>
          </li>
          <li>
            <a href="https://github.com/beerjs/tahoe" target="_blank" rel="noopener noreferrer">BeerJS: Tahoe</a>
          </li>
          <li>
            <a href="https://www.meetup.com/dev-reno" target="_blank" rel="noopener noreferrer">/dev/reno</a>
          </li>
        </ul>
      </div>

      <hr style={{ marginBottom: 100, marginTop: 100 }} />

      <div>
        <h2>Code of Conduct</h2>
        <p>We strictly adhere to the <a href="http://citizencodeofconduct.org">Citizen Code of Conduct</a></p>
      </div>
    </div>
  </Layout>
)

const LAT = 39.510430
const LNG = -119.805770

class Map extends Component {
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
        onViewportChange={(viewport) => this.setState({ viewport })}
      >
        <Marker
          longitude={LNG}
          latitude={LAT} >
          <MarkerPin size={20} onClick={() => this.setState({ popupInfo: true })} />
        </Marker>
        <Popup
          tipSize={5}
          anchor="top"
          longitude={LNG}
          latitude={LAT}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <Popover />
        </Popup>
      </ReactMapGL>
    )
  }
}

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3 c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9 C20.1,15.8,20.2,15.8,20.2,15.7z`

const pinStyle = {
  cursor: 'pointer',
  fill: '#d00',
  stroke: 'none',
}

class MarkerPin extends PureComponent {
  render () {
    const { size = 20, onClick } = this.props

    return (
      <svg
        height={size}
        viewBox="0 0 24 24"
        style={{ ...pinStyle, transform: `translate(${-size / 2}px,${-size}px)` }}
        onClick={onClick}
      >
        <path d={ICON}/>
      </svg>
    )
  }
}

class Popover extends PureComponent {
  render () {
    const { info } = this.props
    return (
      <div>Rue Bourbon</div>
    )
  }
}

export default IndexPage
