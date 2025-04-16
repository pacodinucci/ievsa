"use client";

import React, { Suspense } from "react";
import GalleryContent from "../components/GalleryContent";

const GalleryPage = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <GalleryContent />
    </Suspense>
  );
};

export default GalleryPage;
