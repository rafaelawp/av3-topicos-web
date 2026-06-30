import Link from "next/link";

export default function HeaderReturn() {
  return (
      <header className="bg-indigo-300 flex justify-center align-center text-white p-2">
        <div className="w-[100%] max-w-[80%] flex justify-between">
          <h1>PhysicSchool</h1>

          <nav className="flex gap-6">
            <Link href="../">Home</Link>
          </nav>
        </div>
      </header>
  );
}