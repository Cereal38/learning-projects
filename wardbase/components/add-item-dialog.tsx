'use client';

import { useActionState } from 'react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Field, FieldError, FieldGroup, FieldLabel } from './ui/field';
import { Input } from './ui/input';
import { Label } from './ui/label';
import Form from 'next/form';
import { addItem } from '@/lib/actions';

export default function AddItemDialog() {
  const [actionState, formAction] = useActionState(addItem, null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add an item</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-sm'>
        <DialogHeader>
          <DialogTitle>Add an item to your wardrobe</DialogTitle>
          <DialogDescription>
            Give some information about your item and click the add button to
            add it to your wardrobe!
          </DialogDescription>
        </DialogHeader>
        <Form action={formAction}>
          <FieldGroup>
            <Field>
              <Label htmlFor='label'>Label</Label>
              <Input id='label' name='label' />
              {actionState?.errors?.label && (
                <FieldError>{actionState.errors.label[0]}</FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor='image'>Image</FieldLabel>
              <Input id='image' name='image' type='file' accept='image/*' />
              {actionState?.errors?.image && (
                <FieldError>{actionState.errors.image}</FieldError>
              )}
            </Field>
          </FieldGroup>
          <DialogFooter className='pt-4'>
            <DialogClose asChild>
              <Button variant='outline'>Cancel</Button>
            </DialogClose>
            <Button type='submit'>Add</Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
