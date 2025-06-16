"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

interface Props {
  placeholder: string;
  options: {
    label: string;
    value: string;
  }[];
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export function FilterSelect({ options, placeholder, setValue }: Props) {
  return (
    <Select onValueChange={(value) => setValue(value)}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>select</SelectLabel>
          {options.map((option, i) => (
            <SelectItem key={i} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
