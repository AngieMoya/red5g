import Image from 'next/image'
import Login from '@/components/Login'
import Disbursement from '@/components/Disbursement'

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <Disbursement/>
    </main>
  )
}
