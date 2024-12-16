'use client';
import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
<<<<<<< HEAD
} from '@/components/ui/popover';

import Link from 'next/link';
import { Label } from './ui/label';
import { Input } from './ui/input';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const StyleGuide = () => {
  const [date, setDate] = React.useState();
  return (
    <>
      {/* typography */}
      <div className='flex flex-col gap-y-4 p-24'>
=======
} from "@/components/ui/popover"

import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const StyleGuide = () => {
  const [date, setDate] = React.useState()
  return (
    <>
      <div className="flex flex-col gap-y-4 p-24">
>>>>>>> b3d4aaeba88f38466291f23e626294803af89007
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          corporis officiis vel alias ea id vitae enim ipsum cum, quisquam ex
          numquam est ut eius rerum at ad deserunt natus!
<<<<<<< HEAD
        </p>
      </div>
      <div className='bg-black p-24 flex flex-col gap-y-4'>
        <Link href='/'>Link</Link>
        {/* buttons */}
        <Button variant='default'>Button 1</Button>
        <Button variant='orange'>Button 2</Button>
        <Button variant='input'>Button 3</Button>
        <Button variant='orange' size='sm'>
          Button 2
        </Button>
        {/* label & input */}
        <div>
          <Label htmlFor='firstname'>First Name</Label>
          <Input type='firstname' id='firstname' />
        </div>
        <div>
          <Label htmlFor='lastname'>Last Name</Label>
          <Input type='lastname' id='lastname' />
=======
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
>>>>>>> b3d4aaeba88f38466291f23e626294803af89007
        </div>
        {/* calendar */}
        <div>
          <Label>date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
<<<<<<< HEAD
                variant={'input'}
                className={cn('w-full justify-start text-left font-normal')}
              >
                <CalendarIcon className='mr-2 h-4 w-4' />
                {date ? format(date, 'PPP') : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0'>
              <Calendar
                mode='single'
=======
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
>>>>>>> b3d4aaeba88f38466291f23e626294803af89007
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
<<<<<<< HEAD
        {/* select */}
        <Select>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Select a fruit' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value='apple'>Apple</SelectItem>
              <SelectItem value='banana'>Banana</SelectItem>
              <SelectItem value='blueberry'>Blueberry</SelectItem>
              <SelectItem value='grapes'>Grapes</SelectItem>
              <SelectItem value='pineapple'>Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
=======
>>>>>>> b3d4aaeba88f38466291f23e626294803af89007
      </div>
    </>
  );
};

<<<<<<< HEAD
export default StyleGuide;
=======
export default StyleGuide;
>>>>>>> b3d4aaeba88f38466291f23e626294803af89007
