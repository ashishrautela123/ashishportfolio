import React from 'react';

export function renderFormattedText(
  text: string,
  strongClassName = 'font-semibold text-[#171A20] dark:text-[#F6F3EC]'
): React.ReactNode {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className={strongClassName}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
