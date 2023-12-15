import { createPortal } from 'react-dom';

export default function Portal({ children }: { children: React.ReactNode }) {
  const element = document.getElementById('portal') as HTMLElement;

  return createPortal(children, element);
}
