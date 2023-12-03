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
    <div className="mt-4 max-h-[480px] overflow-y-scroll">
      {messages.map((message, index) => (
        <div key={index}>
          <ChatMessage message={message} />
          {index < messages.length - 1 && <div className="my-3" />}
        </div>
      ))}
    </div>
  )
}
