// app/components/InputField.jsx
export default function InputField({ label, value, onChange, type = 'text', placeholder, className }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="mb-2 text-lg text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
