'use client';

import { Copy } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';

interface InputParams {
  label?: string;
}

export default function CopyUrlButton({ label = 'Copy' }: InputParams) {
  const [copied, setCopied] = useState<boolean>(false);

  async function handleCopy() {
    setCopied(true);
    await navigator.clipboard.writeText(window.location.href);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <Button className='cursor-pointer' onClick={handleCopy} disabled={copied}>
      <Copy />
      {copied ? 'Copied to clipboard!' : label}
    </Button>
  );
}
