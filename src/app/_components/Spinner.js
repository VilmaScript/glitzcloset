// components/GlowingSpinner.jsx

export default function GlowingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-12 h-12 rounded-full border-4 border-t-transparent border-secondary animate-spin relative">
        <div className="absolute inset-0 rounded-full blur-md bg-secondary opacity-50 animate-pulse"></div>
      </div>
    </div>
  );
}
