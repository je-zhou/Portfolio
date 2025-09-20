"use client";

import NavBar from "@/components/NavBar/NavBar";
import { useThemeContext } from "@/components/ThemeProvider/ThemeProvider";
import React, { useState } from "react";

export default function AboutPage() {
  let theme = useThemeContext();

  return <main className={`${theme}`}></main>;
}
