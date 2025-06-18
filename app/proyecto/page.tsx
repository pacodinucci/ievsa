"use client";

import { ProjectSection } from "../components/ProjectSection";
import { ProjectMobile } from "../components/ProjectMobile";
import { useIsMobile } from "@/hooks/useIsMobile";

const ProyectoPage = () => {
  const { isMobile, isClient } = useIsMobile();

  if (!isClient) return null;

  return isMobile ? <ProjectMobile /> : <ProjectSection />;
};

export default ProyectoPage;
