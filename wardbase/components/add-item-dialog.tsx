'use client';

import { startTransition, useActionState, useCallback, useState } from 'react';
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
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const ADD_ITEM_PARAM = 'addItem';

export default function AddItemDialog() {
  const [actionState, formAction] = useActionState(addItem, null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isOpen = searchParams.get(ADD_ITEM_PARAM) === 'true';

  const setIsOpen = useCallback(
    (nextOpen: boolean) => {
      const params = new URLSearchParams(searchParams.toString());

      if (nextOpen) params.set(ADD_ITEM_PARAM, 'true');
      else params.delete(ADD_ITEM_PARAM);

      const qs = params.toString();
      const nextUrl = qs ? `${pathname}?${qs}` : pathname;

      startTransition(() => {
        router.replace(nextUrl);
      });
    },
    [router, pathname, searchParams]
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
