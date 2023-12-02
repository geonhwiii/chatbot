'use client';

import toast from 'react-hot-toast';

export function ChatHeader() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <span className="text-sm">{'🚀 저에게 물어보세요'}</span>
        <button
          className="text-sm text-gray-400 hover:underline hover:text-red-400"
          onClick={() => toast.success('청소되었습니다. 🧹', { style: { fontSize: '0.875rem' } })}
        >
          {'Clear'}
        </button>
      </div>
    </div>
  );
}
