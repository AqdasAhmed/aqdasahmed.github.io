import { useState, useEffect } from "react";

const PALETTES = {
  original: {
    name: "Default",
    primary: "rgb(58, 80, 107)",
    secondary: "rgb(91, 192, 190)",
  },
  vibrantPurple: {
    name: "Vibrant Purple",
    primary: "rgb(139, 92, 246)",
    secondary: "rgb(236, 72, 153)",
  },
  coolBlue: {
    name: "Cool Blue",
    primary: "rgb(3, 105, 161)",
    secondary: "rgb(6, 182, 212)",
  },
  darkEmerald: {
    name: "Dark Emerald",
    primary: "rgb(30, 41, 59)",
    secondary: "rgb(16, 185, 129)",
  },
  warmOrange: {
    name: "Warm Orange",
    primary: "rgb(234, 88, 12)",
    secondary: "rgb(245, 158, 11)",
  },
  neonGreen: {
    name: "Neon Green",
    primary: "rgb(15, 23, 42)",
    secondary: "rgb(132, 204, 22)",
  },
  sunset: {
    name: "Sunset",
    primary: "rgb(220, 38, 38)",
    secondary: "rgb(249, 115, 22)",
  },
  galaxy: {
    name: "Galaxy",
    primary: "rgb(79, 70, 229)",
    secondary: "rgb(139, 92, 246)",
  },
  autumn: {
    name: "Autumn",
    primary: "rgb(202, 138, 4)",
    secondary: "rgb(234, 179, 8)",
  },
  blueLagoon: {
    name: "Blue Lagoon",
    primary: "rgb(14, 165, 233)",
    secondary: "rgb(6, 182, 212)",
  },
  candyPink: {
    name: "Candy Pink",
    primary: "rgb(244, 114, 182)",
    secondary: "rgb(251, 191, 36)",
  },
  deepSea: {
    name: "Deep Sea",
    primary: "rgb(20, 83, 45)",
    secondary: "rgb(34, 197, 94)",
  },
};

const useColorPalette = () => {
  const [currentPalette, setCurrentPalette] = useState("original");

  // Load saved palette from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("colorPalette");
    if (saved && PALETTES[saved]) {
      setCurrentPalette(saved);
    }
  }, []);

  // Apply colors to CSS variables when palette changes
  useEffect(() => {
    const palette = PALETTES[currentPalette];
    const root = document.documentElement;
    root.style.setProperty("--color-primary", palette.primary);
    root.style.setProperty("--color-secondary", palette.secondary);
    localStorage.setItem("colorPalette", currentPalette);
  }, [currentPalette]);

  const switchPalette = (paletteKey) => {
    if (PALETTES[paletteKey]) {
      setCurrentPalette(paletteKey);
    }
  };

  return {
    currentPalette,
    switchPalette,
    palettes: PALETTES,
    colors: PALETTES[currentPalette],
  };
};

export default useColorPalette;
