"use client";

import { useState, useEffect, useRef, useId } from "react";
import { fmt } from "@/lib/formatters";

interface CalculatorInputProps {
  label: string;
  value: number;
  onChange: (v: number) => void;
  suffix?: string; // e.g. "kr", "h", "st"
  min?: number;
}

export function CalculatorInput({
  label,
  value,
  onChange,
  suffix,
  min = 0,
}: CalculatorInputProps) {
  const [text, setText] = useState(fmt(value));
  const [focused, setFocused] = useState(false);
  const prevValue = useRef(value);
  const id = useId();

  useEffect(() => {
    if (!focused && value !== prevValue.current) {
      setText(fmt(value));
    }
    prevValue.current = value;
  }, [value, focused]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setText(raw);
    const normalized = raw.replace(/\s/g, "").replace(",", ".");
    const num = parseFloat(normalized);
    if (!isNaN(num)) onChange(Math.max(min, num));
    else if (normalized === "" || normalized === ".") onChange(min);
  };

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-center text-sm font-medium text-white">
        {label}
        {suffix && <span className="ml-1 text-white/40">({suffix})</span>}
      </label>
      <input
        id={id}
        type="text"
        inputMode="decimal"
        value={focused ? text : fmt(value)}
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFocused(false);
          setText(fmt(value));
        }}
        onChange={handleChange}
        className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-white/30 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
      />
    </div>
  );
}
