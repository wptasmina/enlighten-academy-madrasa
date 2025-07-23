"use client";

import dynamic from "next/dynamic";
import React from "react";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
});

const MapWrapper = () => {
  return <Map />;
};

export default MapWrapper;
