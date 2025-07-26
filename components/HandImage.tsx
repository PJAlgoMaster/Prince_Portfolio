export default function HandImage({ className = "" }: { className?: string }) {
  return (
    <img
      src="/assets/hand.png"
      alt="Hand"
      className={`w-auto ${className} drop-shadow-2xl select-none pointer-events-none`}
      draggable={false}
    />
  );
}
