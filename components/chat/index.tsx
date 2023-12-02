'use client';

import { useState } from 'react';
import { ChatHeader } from './chat.header';
import { ChatInput } from './chat.input';
import { ChatList } from './chat.list';

export function Chat() {
  const [input, setInput] = useState<string>('');
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="relative min-w-[50rem] w-full border min-h-[37.5rem] rounded-xl p-5 bg-background shadow-lg">
        <div className="flex flex-col gap-2">
          <div className="relative">
            <ChatHeader />
            <ChatList />
          </div>
          <ChatInput isLoading={false} value={input} setInput={setInput} onSubmit={async () => {}} />
        </div>
      </div>
    </div>
  );
}
