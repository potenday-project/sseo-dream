import { useEffect, useRef } from 'react';
import Loader from './Loader';

type TextareaProps = {
  placeholder?: string;
  value: string;
  isEditable?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isLoading: boolean;
};

function Textarea({ value, placeholder, isEditable, isLoading = false, onChange }: TextareaProps) {
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
    <div className="relative min-h-[416px] bg-contentBackground rounded-[6px] rounded-tl-none overflow-hidden">
      <textarea
        ref={textareaRef}
        className={`resize-none w-full min-h-[416px] p-[14px] focus:outline-none bg-contentBackground`}
        value={value}
        onChange={handleInput}
        placeholder={placeholder}
        disabled={!isEditable}
      />
      {isLoading && <Loader />}
    </div>
  );
}

export default Textarea;
