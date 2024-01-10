import Link from 'next/link';
export default function StudentInfo () {
    return (
      <>
       <div>
            <h1>Shopping List</h1>
            <p>Rommel Hipos</p>
            <Link className="hover:text-green-400 hover:underline" 
            href={`https://github.com/IamStudentRommel`}> https://github.com/IamStudentRommel
            </Link>
        </div>
      </>
    );
  }
  