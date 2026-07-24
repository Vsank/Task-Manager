import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [count, setCount] = useState(0)
  const [toast, setToast] = useState(null)
  const timer = useRef(null)

  const addItem = useCallback((label) => {
    setCount((c) => c + 1)
    setToast(label ? `${label} added to bag` : 'Added to bag')
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setToast(null), 2600)
  }, [])

  const value = useMemo(() => ({ count, addItem, toast }), [count, addItem, toast])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
