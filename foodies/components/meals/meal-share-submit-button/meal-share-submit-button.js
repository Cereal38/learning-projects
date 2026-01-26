'use client';

import classes from './meal-share-submit-button.module.css';
import { useFormStatus } from 'react-dom';

export default function MealShareSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className={classes.button} disabled={pending}>
      {pending ? 'Submitting...' : 'Share meal'}
    </button>
  );
}
