// hooks/use-initial-loading.ts
"use client"

import { useState, useEffect } from 'react'

export function useInitialLoading() {
  const [isInitialLoading, setIsInitialLoading] = useState(true)

  useEffect(() => {
    // Check if this is the first load
    const hasLoadedBefore = sessionStorage.getItem('hasLoadedBefore')
    
    if (hasLoadedBefore) {
      // Not first load, skip loader
      setIsInitialLoading(false)
      return
    }

    // First load - show loader for 3 seconds
    const timer = setTimeout(() => {
      setIsInitialLoading(false)
      // Mark that the site has been loaded
      sessionStorage.setItem('hasLoadedBefore', 'true')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return isInitialLoading
}