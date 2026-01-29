'use client';

import ImagePicker from '@/components/ui/image-picker/image-picker';
import classes from './page.module.css';
import { shareMeal } from '@/lib/actions';
import MealShareSubmitButton from '@/components/meals/meal-share-submit-button/meal-share-submit-button';
import { useFormState } from 'react-dom';

export default function ShareMealPage() {
  // In latest version of react, useFormState is replaced by useActionState hook
  const [actionState, formAction] = useFormState(shareMeal, {
    message: null,
  });

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor='name'>Your name</label>
              <input type='text' id='name' name='name' required />
            </p>
            <p>
              <label htmlFor='email'>Your email</label>
              <input type='email' id='email' name='email' required />
            </p>
          </div>
          <p>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' name='title' required />
          </p>
          <p>
            <label htmlFor='summary'>Short Summary</label>
            <input type='text' id='summary' name='summary' required />
          </p>
          <p>
            <label htmlFor='instructions'>Instructions</label>
            <textarea
              id='instructions'
              name='instructions'
              rows='10'
              required
            ></textarea>
          </p>
          <ImagePicker label='Your image' name='image' />
          {actionState.message && <p>Error: {actionState.message}</p>}
          <p className={classes.actions}>
            <MealShareSubmitButton />
          </p>
        </form>
      </main>
    </>
  );
}
