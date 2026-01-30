import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { postImage } from '@/lib/image';
import Form from 'next/form';

export const metadata = {
  title: 'SharePic form',
  describe: 'A form to share a picture in seconds',
};

export default function Home() {
  return (
    <main className='w-full h-screen bg-gray-100 pt-16'>
      <Card className='mx-auto max-w-4xl pt-20 px-8 flex flex-col gap-16'>
        <h1 className='text-2xl'>Upload an image you want to share</h1>

        <Form action={postImage} className='flex flex-col gap-8 mb-8'>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor='author'>Your name</FieldLabel>
              <FieldDescription>
                This is the text which will be displayed next to the image.
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

            <Field>
              <FieldLabel htmlFor='file'>Picture</FieldLabel>
              <FieldDescription>Select an image to share.</FieldDescription>
              <Input id='file' name='file' type='file' accept='image/*' />
            </Field>
          </FieldGroup>
          <Button type='submit'>Submit</Button>
        </Form>
      </Card>
    </main>
  );
}
