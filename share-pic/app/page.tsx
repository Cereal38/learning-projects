import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import Form from 'next/form';

export default function Home() {
  return (
    <main>
      <h1 className='text-4xl'>Upload an image you want to share</h1>

      <Form action='/result'>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor='author'>Your name</FieldLabel>
            <Input id='author' name='author' autoComplete='off' />
          </Field>
        </FieldGroup>
      </Form>
    </main>
  );
}
