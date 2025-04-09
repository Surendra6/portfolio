import React from "react";
import { render, screen } from "@testing-library/react";
import Projects from "./Projects";
import { ThemeProvider } from "../../ThemeContext";
import "@testing-library/jest-dom";

const mockProjects = [
  {
    name: "E-commerce Platform",
    description: "A modern e-commerce platform.",
    technologies: ["React", "Redux", "Tailwind CSS"],
    github: "https://github.com/johndoe/ecommerce-platform",
    demo: "https://ecommerce-platform.example.com",
  },
];

test("renders projects section", () => {
  render(
    <ThemeProvider>
      <Projects projects={mockProjects} />
    </ThemeProvider>
  );
  expect(screen.getByText("Projects")).toBeInTheDocument();
  expect(screen.getByText("E-commerce Platform")).toBeInTheDocument();
  expect(screen.getByText("A modern e-commerce platform.")).toBeInTheDocument();
  expect(
    screen.getByText("Technologies: React, Redux, Tailwind CSS")
  ).toBeInTheDocument();
  expect(screen.getByText("GitHub")).toBeInTheDocument();
  expect(screen.getByText("Demo")).toBeInTheDocument();
});
