import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isFileLike(value: unknown): value is File {
  // `instanceof File` can fail on the server, so we use a structural check.
  return (
    !!value &&
    typeof value === 'object' &&
    typeof (value as Blob).arrayBuffer === 'function'
  );
}
