import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { submitImage } from '@/lib/imageForm';
import Form from 'next/form';

export default function Home() {
  return (
    <main className='w-full h-screen bg-gray-100 pt-16'>
      <Card className='mx-auto max-w-4xl pt-20 px-8 flex flex-col gap-16'>
        <h1 className='text-2xl'>Upload an image you want to share</h1>

        <Form action={submitImage} className='flex flex-col gap-8 mb-8'>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor='author'>Your name</FieldLabel>
              <FieldDescription>
                This is the which will be displayed next to the image.
              </FieldDescription>
              <Input id='author' name='author' autoComplete='off' />
            </Field>

            <Field>
              <FieldLabel htmlFor='description'>Description</FieldLabel>
              <FieldDescription>
                If you want to tell something about your image, but this is
                optional.
              </FieldDescription>
              <Input id='description' name='description' autoComplete='off' />
            </Field>

            {/* TODO: Add a picture upload feature here */}
          </FieldGroup>
          <Button type='submit'>Submit</Button>
        </Form>
      </Card>
    </main>
  );
}
