// app/client-layout.tsx
"use client"

import { useInitialLoading } from "@/app/hooks/use-initial-loading"
import GeometricLoader from "@/app/components/loader"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isInitialLoading = useInitialLoading()

  if (isInitialLoading) {
    return <GeometricLoader />
  }

  return (
    <div className="transition-opacity duration-500 ease-in-out">
      {children}
    </div>
  )
}