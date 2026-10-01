"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { CourseCategory } from "@/data/courses";

interface CourseDiscoveryContextValue {
  activeCategory: CourseCategory;
  query: string;
  setActiveCategory: (category: CourseCategory) => void;
  setQuery: (query: string) => void;
}

export interface CourseDiscoveryProviderProps {
  children: ReactNode;
}

const CourseDiscoveryContext = createContext<CourseDiscoveryContextValue | null>(null);

export function CourseDiscoveryProvider({ children }: CourseDiscoveryProviderProps) {
  const [activeCategory, setActiveCategory] = useState<CourseCategory>("Featured");
  const [query, setQuery] = useState("");
  const value = useMemo(
    () => ({ activeCategory, query, setActiveCategory, setQuery }),
    [activeCategory, query],
  );

  return <CourseDiscoveryContext.Provider value={value}>{children}</CourseDiscoveryContext.Provider>;
}

export function useCourseDiscovery() {
  const context = useContext(CourseDiscoveryContext);

  if (!context) {
    throw new Error("useCourseDiscovery must be used within CourseDiscoveryProvider");
  }

  return context;
}
