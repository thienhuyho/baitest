'use client'

import { useEffect, useState } from 'react'
import i18next from 'i18next'
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { getOptions } from './settings'

const runsOnServerSide = typeof window === 'undefined'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language: string, namespace: string) => {
    return import(`../../public/locales/${language}/${namespace}.json`)
  }))
  .init({
    ...getOptions(),
    lng: undefined,
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: ['en', 'vi']
  })

export function useClientTranslation(lng: string, ns?: string, options = {}) {
  const [mounted, setMounted] = useState(false)
  const ret = useTranslationOrg(ns, options)
  const { i18n } = ret

  useEffect(() => {
    if (runsOnServerSide) return
    setMounted(true)
  }, [])

  useEffect(() => {
    if (i18n.resolvedLanguage === lng) return
    i18n.changeLanguage(lng)
  }, [lng, i18n])

  if (runsOnServerSide || !mounted) return ret

  return ret
}