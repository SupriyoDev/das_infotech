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
    title: string;
    value: string;
  }[];
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export function FilterSelect({ options, placeholder, setValue }: Props) {
  return (
    <Select onValueChange={(value) => setValue(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>filter</SelectLabel>
          {options.map((option, i) => (
            <SelectItem key={i} value={option.value}>
              {option.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
