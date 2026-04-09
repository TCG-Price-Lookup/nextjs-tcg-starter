"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  onRetry?: () => void;
}

export function ErrorState({
  title,
  description,
  ctaLabel,
  ctaHref,
  onRetry,
}: Props) {
  return (
    <div className="mx-auto max-w-xl rounded-lg border border-destructive/50 bg-destructive/5 p-8 text-center">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <div className="mt-6 flex justify-center gap-3">
        {onRetry && (
          <Button variant="outline" onClick={onRetry}>
            Try again
          </Button>
        )}
        {ctaLabel && ctaHref && (
          <Link href={ctaHref}>
            <Button>{ctaLabel}</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
