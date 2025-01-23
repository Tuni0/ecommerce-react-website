"use client";
import React, { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return <Button variant="secondary" size="icon" disabled={true}></Button>;

  const dark = theme === "dark";

  return (
    <div className="flex flex-row items-center">
      <Button
        variant="default"
        size="icon"
        disabled={false}
        onClick={() => setTheme(dark ? "light" : "dark")}
      >
        {dark ? (
          <BsSunFill className="hover:cursor-pointer hover:text-primary"></BsSunFill>
        ) : (
          <BsFillMoonStarsFill className="hover:cursor-pointer hover:text-primary"></BsFillMoonStarsFill>
        )}
      </Button>
    </div>
  );
}

export default ThemeSwitcher;
