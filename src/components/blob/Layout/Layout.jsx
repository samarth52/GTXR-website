import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import { Canvas } from "react-three-fiber";
import Effects from "../Effects/Effects";
import MetaballSwarm from "../Metaball/MetaballSwarm";

const getDevicePixelRatio = (maxDpr = 2) =>
  typeof window !== "undefined" ? Math.min(Math.max(Math.round(window.devicePixelRatio), 1), maxDpr).toFixed(1) : "1.0";

export function Layout() {
  return (
    <>
      <meta
        property="og:image"
        content="https://cdn.raster.app/blockchain-at-georgia-tech/Sb4iAtiu4B?ixlib=js-3.6.0&amp;s=ef4c765f8a020ebbb89567b2d2d73076"
      />
      <div className="LayoutBackground" />
      <div style={{ height: "100vh" }} className="LayoutContainer">
        <Canvas gl={{ autoClear: false }} dpr={getDevicePixelRatio(1)}>
          <MetaballSwarm />
          <Suspense fallback={null}>
            <Effects />
          </Suspense>
        </Canvas>
      </div>

      <Outlet />
    </>
  );
}
