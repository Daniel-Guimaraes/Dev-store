'use client'

import { useCart } from '@/contexts/cart-context'

interface AddCartButtonProps {
  productId: number
}

export function AddToCartButton({ productId }: AddCartButtonProps) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(productId)
  }

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
