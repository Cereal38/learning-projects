'use client';

import { Copy } from 'lucide-react';
import { Button } from '../ui/button';

interface InputParams {
  label?: string;
}

export default function CopyUrlButton({ label = 'Copy' }: InputParams) {
  async function handleCopy() {
    await navigator.clipboard.writeText(window.location.href);
  }

  return (
    <Button className='cursor-pointer' onClick={handleCopy}>
      <Copy />
      {label}
    </Button>
  );
}
