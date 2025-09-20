"use client";

import About from "@/components/About/About";
import NavBar from "@/components/NavBar/NavBar";
import PageLayout from "@/components/PageLayout";
import { useThemeContext } from "@/components/ThemeProvider/ThemeProvider";
import React, { useState } from "react";

export default function AboutPage() {
  return (
    <PageLayout>
      <About />
    </PageLayout>
  );
}
