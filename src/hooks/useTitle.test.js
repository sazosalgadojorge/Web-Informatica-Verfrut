import { describe, it, expect, afterEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useTitle } from './useTitle'

describe('useTitle', () => {
  afterEach(() => {
    document.title = 'Unifrutti Technology'
    document.querySelector('meta[name="description"]')?.remove()
  })

  it('appends the base title', () => {
    renderHook(() => useTitle('Turnos'))
    expect(document.title).toBe('Turnos — Unifrutti Technology')
  })

  it('falls back to the base title when no title given', () => {
    renderHook(() => useTitle(''))
    expect(document.title).toBe('Unifrutti Technology')
  })

  it('updates the meta description when provided', () => {
    const meta = document.createElement('meta')
    meta.setAttribute('name', 'description')
    meta.setAttribute('content', 'original')
    document.head.appendChild(meta)

    renderHook(() => useTitle('Anexos', 'nueva descripción'))
    expect(meta.getAttribute('content')).toBe('nueva descripción')
  })

  it('restores the previous title on unmount', () => {
    document.title = 'Previo'
    const { unmount } = renderHook(() => useTitle('Turnos'))
    expect(document.title).toBe('Turnos — Unifrutti Technology')
    unmount()
    expect(document.title).toBe('Previo')
  })
})
