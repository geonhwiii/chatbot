import { Chat } from '@/components/chat'
import { nanoid } from '@/utils/nanoid'

export default function Home() {
  const id = nanoid()
  return (
    <div>
      <Chat id={id} />
    </div>
  )
}
