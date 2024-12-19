"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface SelectorProps {
  label: string;
  options: string[];
  onChange: (value: string) => void;
}

export default function Selector({ label, options, onChange }: SelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="selector">
      <div className="selector-label" onClick={() => setIsOpen((prev) => !prev)} role="button"
        aria-expanded={isOpen} tabIndex={0} onKeyDown={(e) => e.key === "Enter" && setIsOpen((prev) => !prev)}>
        <span>{label}</span>
        <ChevronDown />
      </div>
      {isOpen && (
        <ul className="selector-options">
          {options.map((option, index) => (
            <li key={index} className="selector-option"
              onClick={() => handleOptionClick(option)} role="option" tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
