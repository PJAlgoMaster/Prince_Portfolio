export default function BackgroundVideo() {
  return (
    <video
      className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 pointer-events-none"
      src="/assets/background.mp4"
      autoPlay
      loop
      muted
      playsInline
      aria-hidden
      preload="auto"
      style={{
        minHeight: "100%",
        minWidth: "100%",
      }}
    />
  );
}
