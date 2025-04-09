import React from "react";
import { render, screen } from "@testing-library/react";
import Awards from "./Awards";
import { ThemeProvider } from "../../ThemeContext";
import "@testing-library/jest-dom";

const mockAwards = [
  {
    name: "Employee of the Month",
    organization: "Acme Corp",
    date: "2021-12-01",
    description: "Awarded for outstanding performance.",
  },
];

test("renders awards section", () => {
  render(
    <ThemeProvider>
      <Awards awards={mockAwards} />
    </ThemeProvider>
  );
  expect(screen.getByText("Awards")).toBeInTheDocument();
  expect(screen.getByText("Employee of the Month")).toBeInTheDocument();
  expect(screen.getByText("Acme Corp - 2021-12-01")).toBeInTheDocument();
  expect(
    screen.getByText("Awarded for outstanding performance.")
  ).toBeInTheDocument();
});
