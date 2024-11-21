// app/components/Modal.jsx
import { Dialog } from "@headlessui/react";

export default function Modal({ isOpen, onClose, children }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
      <Dialog.Panel className="fixed inset-1/4 w-1/2 bg-white p-6 rounded-lg shadow-lg">
        {children}
        <button onClick={onClose} className="mt-4 text-blue-500">
          Cerrar
        </button>
      </Dialog.Panel>
    </Dialog>
  );
}
