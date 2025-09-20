"use client";
import About from "@/components/About/About";
import Intro from "@/components/Intro/Intro";
import NavBar from "@/components/NavBar/NavBar";
import Projects from "@/components/Projects/Projects";
import { useState } from "react";
import { useThemeContext } from "@/components/ThemeProvider/ThemeProvider";
import Connect from "@/components/Connect/Connect";
import PageLayout from "@/components/PageLayout";

export default function Home() {
  return (
    <PageLayout className="flex flex-col items-center">
      <Intro />
      <Projects />
      <Connect />
    </PageLayout>
  );
}
