'use client'

import { type UseChatHelpers } from 'ai/react'
import { useEnterSubmit } from '@/hooks/useEnterSubmit'
import { ChangeEvent, FormEventHandler, useRef } from 'react'
import Textarea from 'react-textarea-autosize'

type ChatInputProps = Pick<
  UseChatHelpers,
  'isLoading' | 'reload' | 'messages' | 'stop' | 'input' | 'setInput'
> & {
  id?: string
  setInput: (value: string) => void
  onSubmit: (value: string) => Promise<void>
}

export function ChatInput({
  isLoading,
  input: value,
  setInput,
  onSubmit
}: ChatInputProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const { formRef, onKeyDown } = useEnterSubmit()
  const onSubmitHandler = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!value?.trim()) {
      return
    }
    setInput('')
    await onSubmit(value)
  }

  return (
    <div className="absolute bottom-2 inset-x-0 px-4 bg-background ">
      <form ref={formRef} onSubmit={onSubmitHandler}>
        <Textarea
          ref={inputRef}
          tabIndex={0}
          placeholder="Send a message."
          spellCheck={false}
          rows={1}
          value={value}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          className="max-h-60 px-4 py-3 w-full resize-none bg-transparent focus-within:outline-none sm:text-sm border border-gray-200 focus:border-sky-400 rounded-xl transition-colors z-0"
        />
      </form>
    </div>
  )
}
