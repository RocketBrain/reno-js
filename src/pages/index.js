import React from 'react'
// import { Link } from 'gatsby'

import Layout from 'components/Layout'
import Image from 'components/Image'
import SEO from 'components/Seo'
import Map from 'components/Map'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ padding: 50 }}>
      <Image />

      <p>The sole purpose of RenoJS is to find, grow, and strengthen the tech community in our region and ultimately this city.</p>

      {/* <Link to="/page-2/">Go to page 2</Link> */}
      <hr style={{ marginBottom: 75, marginTop: 75 }} />

      <div>
        <h2>Regional Events</h2>

        <ul>
          <li>
            <h3>BeerJS: Reno</h3>

            <p>We meet at 6:00pm PST on the second Thursday of the month every month.  Our home:</p>

            <div style={{ textAlign: 'center', marginTop: 20, marginBottom: 20 }}>
              <address>
                <a href="https://www.ruebourbonreno.com">Rue and Bourbon</a><br />
                1401 S Virginia St<br />
                Reno, NV
              </address>
            </div>

            <Map />

            <h4>Sponsors: </h4>

            <ul style={{ display: 'flex', justifyContent: 'space-around', fontSize: '1.25rem' }}>
              <li>
                <a href="http://synap.io" target="_blank" rel="noopener noreferrer">Synap.io</a>
              </li>
              <li>
                <a href="https://www.stickermule.com" target="_blank" rel="noopener noreferrer">Sticker Mule</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>BeerJS: Tahoe</h3>

            <p>Keep up to date with JS and Tahoe <a href="https://www.facebook.com/beerjstahoe/">here</a></p>
          </li>
        </ul>
      </div>

      <hr style={{ marginBottom: 75, marginTop: 75 }} />

      <div>
        <h2>Useful links</h2>

        <ul>
          <li>
            <a href="https://www.meetup.com/RenoJS" target="_blank" rel="noopener noreferrer">RenoJS Meetup.com</a>
          </li>
          <li>
            <a href="https://github.com/beerjs/reno" target="_blank" rel="noopener noreferrer">BeerJS: Reno</a> | <a href="https://beers-slack-invite.herokuapp.com" target="_blank" rel="noopener noreferrer">Slack channel</a>
          </li>
          <li>
            <a href="https://github.com/beerjs/tahoe" target="_blank" rel="noopener noreferrer">BeerJS: Tahoe</a> | <a href="https://www.facebook.com/beerjstahoe" target="_blank" rel="noopener noreferrer">BeerJS: Tahoe Facebook</a>
          </li>
          <li>
            <a href="https://www.meetup.com/dev-reno" target="_blank" rel="noopener noreferrer">/dev/reno</a>
          </li>
        </ul>
      </div>

      <hr style={{ marginBottom: 75, marginTop: 75 }} />

      <div>
        <h2>Code of Conduct</h2>
        <p>We strictly adhere to the <a href="http://citizencodeofconduct.org">Citizen Code of Conduct</a></p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
