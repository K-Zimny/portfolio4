import Image from "next/image";

// Currently Hardcoded for BME Project. Extend when needed.

export default function ImageViewer() {
  return (
    <Image
      src="/temp-humidity.webp"
      alt="A dashboard showing temperature and humidity readings in a residential setting."
      width={1920}
      height={1080}
      style={{ maxWidth: "100%", height: "auto" }}
      unoptimized
    />
  );
}
