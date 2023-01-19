import React, { Suspense } from 'react'
import { Outlet } from "react-router-dom";
import "./Layout.css"
import Effects from './Effects'
import MetaballSwarm from './blob/MetaballSwarm'
import { getDevicePixelRatio } from "./utils"
import { Canvas } from 'react-three-fiber'

export function Layout() {
    return (
      <>
      
        <meta
          property="og:image"
          content="https://cdn.raster.app/blockchain-at-georgia-tech/Sb4iAtiu4B?ixlib=js-3.6.0&amp;s=ef4c765f8a020ebbb89567b2d2d73076"></meta>
        <div style={{ height: '100vh' }} className="LayoutContainer">
          <Canvas gl={{ autoClear: false }} dpr={getDevicePixelRatio(1)}>
            <MetaballSwarm />
            <Suspense fallback={null}>
              <Effects />
              </Suspense>
          </Canvas>
        </div>
  
        <Outlet/>
        
      </>
    )
  }