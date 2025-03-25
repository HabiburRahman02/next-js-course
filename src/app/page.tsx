import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h2 className="text-4xl">Welcome Home!!!</h2>
      <Link href='/about'>About</Link>
      <Link href='/products'>Products</Link>
    </div>
  );
}
