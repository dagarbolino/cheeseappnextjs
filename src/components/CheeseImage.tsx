'use client';

import Image from 'next/image';
import { useEffect } from 'react';

interface CheeseImageProps {
  src: string;
  alt: string;
}

export default function CheeseImage({ src, alt }: CheeseImageProps) {
  useEffect(() => {
    const img = new Image();
    img.src = src;
  }, [src]);

  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-t-xl"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={true}
        loading="eager"
      />
    </div>
  );
} 