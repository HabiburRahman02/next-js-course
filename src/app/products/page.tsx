import Link from 'next/link'
import React from 'react'

export default function ProductsPage() {
  const id = 900;
  return (
    <div>
      <h1>All Products</h1>
      <ul>
       <Link href='products/1'> <li>Product - 1</li></Link>
       <Link href='products/2'> <li>Product - 2</li></Link>
       <Link href='products/3' replace> <li>Product - 3</li></Link>
       <Link href={`products/${id}`}> <li>Product - {id}</li></Link>
      </ul>
    </div>
  )
}
