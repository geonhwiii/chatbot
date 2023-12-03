'use client'

import { ChatHeader } from './chat.header'
import { ChatInput } from './chat.input'
import { ChatList } from './chat.list'
import { type Message, useChat } from 'ai/react'
import toast from 'react-hot-toast'

export type ChatProps = React.ComponentProps<'div'> & {
  id?: string
  initialMessages?: Message[]
}

export function Chat({ id, initialMessages }: ChatProps) {
  const { messages, append, reload, stop, isLoading, input, setInput } =
    useChat({
      initialMessages,
      id,
      body: {
        id
      },
      onResponse(response) {
        if (response.status === 401) {
          toast.error(response.statusText)
        }
      }
    })

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="relative min-w-[40rem] w-full border min-h-[37.5rem] rounded-xl p-5 bg-background shadow-lg">
        <div className="flex flex-col gap-2">
          <div className="relative">
            <ChatHeader />
            <ChatList messages={messages} />
          </div>
          <ChatInput
            isLoading={isLoading}
            messages={messages}
            input={input}
            setInput={setInput}
            onSubmit={async content => {
              await append({
                id,
                content,
                role: 'user'
              })
            }}
            reload={reload}
            stop={stop}
          />
        </div>
      </div>
    </div>
  )
}
