"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const CookieIcon = () => (
  <svg className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
)

const SettingsIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const XIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    }
    localStorage.setItem("cookie-consent", JSON.stringify(consent))
    setShowBanner(false)
  }

  const acceptSelected = () => {
    const consent = {
      ...preferences,
      timestamp: Date.now(),
    }
    localStorage.setItem("cookie-consent", JSON.stringify(consent))
    setShowBanner(false)
    setShowSettings(false)
  }

  const rejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    }
    localStorage.setItem("cookie-consent", JSON.stringify(consent))
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="mx-auto max-w-4xl bg-white border-2 border-amber-200 shadow-2xl">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <CookieIcon />
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">Cookie-instellingen</h3>
              <p className="text-gray-600 mb-4">
                We gebruiken cookies om uw ervaring te verbeteren en onze diensten te optimaliseren. Functionele cookies
                zijn noodzakelijk voor de werking van de website.
              </p>

              {showSettings && (
                <div className="space-y-4 mb-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Noodzakelijke cookies</h4>
                      <p className="text-sm text-gray-600">Vereist voor de basisfunctionaliteit</p>
                    </div>
                    <input type="checkbox" checked={true} disabled className="rounded" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Analytische cookies</h4>
                      <p className="text-sm text-gray-600">Helpen ons de website te verbeteren</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences((prev) => ({ ...prev, analytics: e.target.checked }))}
                      className="rounded"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Marketing cookies</h4>
                      <p className="text-sm text-gray-600">Voor gepersonaliseerde advertenties</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences((prev) => ({ ...prev, marketing: e.target.checked }))}
                      className="rounded"
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                <Button onClick={acceptAll} className="bg-amber-600 hover:bg-amber-700">
                  Alles accepteren
                </Button>
                <Button onClick={rejectAll} variant="outline">
                  Alleen noodzakelijke
                </Button>
                <Button
                  onClick={() => (showSettings ? acceptSelected() : setShowSettings(true))}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <SettingsIcon />
                  {showSettings ? "Opslaan" : "Instellingen"}
                </Button>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setShowBanner(false)} className="flex-shrink-0">
              <XIcon />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
