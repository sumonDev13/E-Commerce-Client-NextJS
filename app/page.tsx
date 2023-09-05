import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Welcome to the e-shop
        </h1>
        <p className="mt-3 max-w-md mx-auto text-center text-xl leading-6 text-gray-500">
          not a member? Please
          <Link href="/login">Signup</Link>
        </p>
      </div>
    </>
  );
}
