"use client";
import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const StyleGuide = () => {
  const [date, setDate] = React.useState()
  return (
    <>
      <div className="flex flex-col gap-y-4 p-24">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          corporis officiis vel alias ea id vitae enim ipsum cum, quisquam ex
          numquam est ut eius rerum at ad deserunt natus!
          </p>
      </div>

      {/* buttons */}
      <div className="bg-black p-24 flex flex-col gap-y-4">
        <Link href='/'>Link</Link>
        <Button variant='default'>Button 1</Button>
        <Button variant='orange'>Button 2</Button>
        <Button variant='input'>Button 3</Button>
        <Button variant='orange' size='sm'>Button 4</Button>

        {/* label & input */}
        <div>
          <Label htmlFor='firstname'>First Name</Label>
          <Input type='firstname' id='firstname'/>
        </div>
        <div>
          <Label htmlFor='lastname'>Last Name</Label>
          <Input type='lastname' id='lastname'/>
        </div>
        {/* calendar */}
        <div>
          <Label>date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"input"}
                className={cn("w-full justify-start text-left font-normal")}
              >
                <CalendarIcon className='mr-2 h-4 w-4'/>
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </>
  );
};

export default StyleGuide;