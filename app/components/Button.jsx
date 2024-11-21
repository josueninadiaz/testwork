// app/components/Button.jsx
export default function Button({ text, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none ${className}`}
    >
      {text}
    </button>
  );
}
