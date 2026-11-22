"use client";

import React from "react";
import dynamic from "next/dynamic";

const DynamicScene3D = dynamic(() => import("./Scene3D"), {
  ssr: false,
  loading: () => null,
});

export default function SceneContainer({ theme }: { theme: "dark" | "light" }) {
  return (
    <div className="w-full h-full relative select-none">
      <DynamicScene3D theme={theme} />
    </div>
  );
}
