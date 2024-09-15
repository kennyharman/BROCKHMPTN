import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Album from './Album'
import { Image } from "react"
import saturationBrockhampton from './assets/saturation_brockhampton.webp';
import saturation2Brockhampton from './assets/saturation2.webp';
import saturation3Brockhampton from './assets/saturation3.webp';

function App() {

  return (
    <>
      <main>
        <div className='header-section'>
          <div className="head">
            <h1>
              BROCKHAMPTON
            </h1>
          </div>
          <div className='subhead'>
            <h2>
              SATURATION TRILOGY
            </h2>
          </div>
        </div>
        <div className='albums'>
          <div className='album-list'>
            <div className='album-cover'>
              <img src={saturationBrockhampton} style={{
                width: 200,
                height: 200
              }}/>
            </div>
            <div>
              <details className='dropdown'>
                <summary>
                  SATURATION
                </summary>
                <ol className='track-list'>
                  <li>HEAT</li>
                  <li>GOLD</li>
                  <li>STAR</li>
                  <li>BOYS</li>
                  <li>2PAC</li>
                  <li>SKIT 1</li>
                  <li>FAKE</li>
                  <li>BANK</li>
                  <li>SKIT 2</li>
                  <li>TRIP</li>
                  <li>SKIT</li>
                  <li>BUMP</li>
                  <li>CASH</li>
                  <li>SKIT 3</li>
                  <li>MILK</li>
                  <li>FACE</li>
                  <li>WASTE</li>
                </ol>
              </details>
            </div>
          </div>
          <div className='album-list'>
            <div className='album-cover'>
              <img src={saturation2Brockhampton} style={{
                width: 200,
                height: 200
              }}/>
            </div>
            <div>
              <details className='dropdown'>
                <summary>
                  SATURATION II
                </summary>
                <ol className='track-list'>
                  <li>GUMMY</li>
                  <li>QUEER</li>
                  <li>JELLO</li>
                  <li>TEETH</li>
                  <li>SWAMP</li>
                  <li>SCENE</li>
                  <li>TOKYO</li>
                  <li>JESUS</li>
                  <li>CHICK</li>
                  <li>JUNKY</li>
                  <li>SCENE 2</li>
                  <li>FIGHT</li>
                  <li>SCENE</li>
                  <li>GAMBA</li>
                  <li>SUNNY</li>
                  <li>SUMMER</li>
                </ol>
              </details>
            </div>
          </div>
          <div className='album-list'>
            <div className='album-cover'>
              <img src={saturation3Brockhampton} style={{
                width: 200,
                height: 200
              }}/>
            </div>
            <div>
              <details className='dropdown'>
                <summary>
                  SATURATION III
                </summary>
                <ol className='track-list'>
                  <li>BOOGIE</li>
                  <li>ZIPPER</li>
                  <li>JOHNNY</li>
                  <li>LIQUID</li>
                  <li>CINEMA 1</li>
                  <li>STUPID</li>
                  <li>BLEACH</li>
                  <li>ALASKA</li>
                  <li>HOTTIE</li>
                  <li>CINEMA 2</li>
                  <li>SISTER/NATION</li>
                  <li>RENTAL</li>
                  <li>STAINS</li>
                  <li>CINEMA 3</li>
                  <li>TEAM</li>
                </ol>
              </details>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
