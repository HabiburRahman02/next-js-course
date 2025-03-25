"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function NavLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    { name: 'Login', href: '/login' },
    { name: 'register', href: '/register' },
    // {name: 'Login', href: '/login'},
  ]
  const pathname = usePathname();
  console.log(pathname, 'pathname');
  return (
    <div>
      <div>
        {
          links.map(link => {

            const isActive = pathname.includes(link.href)
            return <Link
            className={isActive ? 'bg-green-700 text-white p-2': 'p-2'}
            href={link.href} key={link.name}>{link.name}</Link>
          })
        }
      </div>

      {children}
    </div>
  )
}
