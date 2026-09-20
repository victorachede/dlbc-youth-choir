import type { Metadata } from 'next'
import JoinForm from './JoinForm'

export const metadata: Metadata = {
  title: 'Join the Choir',
  description:
    'Add your voice to the DLBC Youth Choir Makurdi. We welcome every voice, trained or untrained — what matters is a heart for worship.',
}

export default function JoinPage() {
  return <JoinForm />
}
