import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ToggleGroupDemo() {
  return (
    <ToggleGroup
      type="multiple"
      variant="default"
      className="bg-blue-500 w-fit text-white rounded-lg"
    >
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        4gb
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        8gb
      </ToggleGroupItem>
      <ToggleGroupItem value="dil" aria-label="Toggle italic">
        12gb
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        16gb
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
