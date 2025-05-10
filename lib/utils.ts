import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// convert  text to array of string

export function ConvertToArrOfString(data: string) {
  return data
    .trim() // Remove leading/trailing whitespace
    .split("\n") // Split into lines
    .map((line) => line.trim()) // Remove leading/trailing spaces from each line
    .filter((line) => line.includes(":")) // Keep only lines with a colon
    .map((line) => {
      const [key, ...valueParts] = line.split(":");
      const value = valueParts.join(":").trim(); // In case value contains ':'
      return `${key.trim()}: ${value}`;
    });
}

export function ConvertToArrOfStringWithDbData(data: string) {
  return (
    data.match(/[^:]+:\s[^:]+(?=\s[^:]+:|$)/g)?.map((str) => str.trim()) || []
  );
}
