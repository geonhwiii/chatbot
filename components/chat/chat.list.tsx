import { type Message } from 'ai/react'
import { ChatMessage } from './chat.message'

type ChatListProps = {
  messages: Message[]
}

export function ChatList({ messages }: ChatListProps) {
  if (!messages.length) {
    return null
  }
  return (
    <div className="relative mx-auto max-w-2xl px-4">
      {messages.map((message, index) => (
        <div key={index}>
          <ChatMessage message={message} />
          {index < messages.length - 1 && (
            <div className="my-4 md:my-8 w-full h-[1px] bg-gray-300" />
          )}
        </div>
      ))}
    </div>
  )
}
