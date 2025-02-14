"use client";

import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
  lng: string;
}

export default function TranslationProvider({ children, lng }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <>{children}</>;
}
