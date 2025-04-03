import React from 'react';

interface BirdProps {
  position: number;
  rotation: number;
}

export function Bird({ position, rotation }: BirdProps) {
  return (
    <div
      className="absolute w-8 h-8 bg-yellow-400 rounded-full"
      style={{
        top: `${position}px`,
        transform: `translateX(50px) rotate(${rotation}deg)`,
        transition: 'transform 100ms',
      }}
    >
      {/* Bird's eye */}
      <div className="absolute w-2 h-2 bg-white rounded-full top-2 right-1">
        <div className="absolute w-1 h-1 bg-black rounded-full top-0.5 right-0.5" />
      </div>
      {/* Bird's beak */}
      <div className="absolute w-4 h-2 bg-orange-500 rounded right-[-8px] top-3" />
      {/* Bird's wing */}
      <div className="absolute w-4 h-3 bg-yellow-500 rounded-full -bottom-1 left-1 transform -rotate-12" />
    </div>
  );
}