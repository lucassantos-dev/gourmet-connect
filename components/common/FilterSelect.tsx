import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

interface FilterSelectProps {
  placeholder: string;
  options: string[];
}
export default function FilterSelect({placeholder, options}:FilterSelectProps) {
  return(
    <Select>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder={placeholder}/>
    </SelectTrigger>
    <SelectContent>
      {
        options.map((option) =>(
            <SelectItem key={option} value={option.toLowerCase().replace(' ', '-')}>
            {option}
            </SelectItem>
        ))
      }
    </SelectContent>
  </Select>
  )
}