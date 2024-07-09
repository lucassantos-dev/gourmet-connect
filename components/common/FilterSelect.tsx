import { DefaultType } from '@/types/types'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

interface FilterSelectProps {
  placeholder: string
  options: DefaultType[]
  onChange: (value: string) => void
}
export default function FilterSelect({
  placeholder,
  options,
  onChange,
}: FilterSelectProps) {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem
            key={option.id}
            value={option.name.toLowerCase().replace(' ', '-')}
          >
            {option.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
