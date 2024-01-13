'use client';

import { useRouter } from "next/navigation"

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={() => router.push('/about')}>Go to about</button>
    </div>
  )
}
