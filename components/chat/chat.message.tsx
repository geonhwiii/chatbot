import { cn } from '@/utils/clsx'
import { type Message } from 'ai/react'

type ChatMessageProps = {
  message: Message
}

export function ChatMessage({ message: { role, content } }: ChatMessageProps) {
  return (
    <div
      className={cn([
        'flex items-center',
        role === 'user' ? 'justify-end' : 'justify-start'
      ])}
    >
      <div
        className={cn([
          'max-w-[90%] border border-gray-100 px-3 py-1.5 text-sm break-all',
          role === 'user' ? 'rounded-2xl bg-slate-50' : 'rounded-xl bg-white'
        ])}
      >
        {content}
      </div>
    </div>
  )
}
