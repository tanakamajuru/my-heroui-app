import { Select, SelectItem } from "@heroui/react"; 

export const sources = [
    { key: "facebook", label: "Facebook" },
    { key: "x", label: "X" },
    { key: "friend", label: "A Friend" },
    { key: "other", label: "Other" },
   
  
  ];
  
  export  function SourceSelection() {
    return (
      <div >
        <Select  className = 'text-black'placeholder="A Friend">
          {sources.map((animal) => (
            <SelectItem key={animal.key}>{animal.label}</SelectItem>
          ))}
        </Select>
      
      </div>
    );
  }


  