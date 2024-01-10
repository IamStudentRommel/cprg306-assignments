import Link from 'next/link';
export default function Page() {
    return (
      <main>
        <div>
            <h1>Shopping List</h1>
            <p>Rommel Hiposs</p>
            <Link className="hover:text-green-400 hover:underline" 
            href={`https://github.com/IamStudentRommel`}> https://github.com/IamStudentRommel
            </Link>
        </div>
      </main>
    );
  }