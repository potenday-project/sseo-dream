import { useEffect, useRef } from 'react';

type TextareaProps = {
  placeholder?: string;
  value: string;
  isEditable?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function Textarea({ value, placeholder, isEditable, onChange }: TextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
    if (onChange) {
      onChange(e);
    }
  };

  useEffect(() => {
    if (isEditable && textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [isEditable]);

  return (
    <div>
      <textarea
        ref={textareaRef}
        className={`resize-none w-full p-[14px] min-h-[416px] focus:outline-none bg-contentBackground rounded-[6px] rounded-tl-none `}
        value={value}
        onChange={handleInput}
        placeholder={placeholder}
        disabled={!isEditable}
      />
    </div>
  );
}

export default Textarea;
