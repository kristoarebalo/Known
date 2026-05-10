import TestEngine from '@/components/TestEngine'
import type { TestId } from '@/lib/data'

interface Props {
  params: { testId: string }
}

export function generateStaticParams() {
  return [
    { testId: 'talent' },
    { testId: 'ocean' },
    { testId: 'connect' },
  ]
}

export default function TestPage({ params }: Props) {
  return <TestEngine testId={params.testId as TestId} />
}
