import { Input } from "../ui/input";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function InputFilter(props:InputProps){
return(
  <Input
      {...props}
      className=""
    />
)
}