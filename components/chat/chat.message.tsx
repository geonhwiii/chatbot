import { type Message } from 'ai/react'

type ChatMessageProps = {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  return <div>{message.content}</div>
}
