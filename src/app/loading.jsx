import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center min-h-screen">
      <Image src="spinner.svg" alt="loading" width={50} height={50} />
    </div>
  );
}
