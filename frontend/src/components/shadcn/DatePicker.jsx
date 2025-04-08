import React, { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function DatePickerDemo({ onChange, value, name, placeholder }) {
  const [date, setDate] = useState(value || "");  // Set default value

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);
    onChange({ target: { name, value: selectedDate } }); // Manually trigger onChange
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full  rounded-lg focus:outline-none font-semibold h-auto  justify-start text-left ",
            !date && "text-muted-foreground"
          )}
        >
          <img src="/images/calender.svg" alt="calender"/>
          {date ? format(date, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={handleDateSelect} initialFocus />
      </PopoverContent>
    </Popover>
  );
}
