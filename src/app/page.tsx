import Link from 'next/link';
import {Button } from '@/components/ui/button';

export default function Home() {
  return (<>
    <h1 className={"text-2xl"}>hi</h1>
      <Link href={"/example"}>
        <Button variant="destructive">example로 이동</Button>
      </Link>
      <Link href={"/login"}>
        <Button variant="destructive">login</Button>
      </Link>
      <Link href={"/dashboard"}>
        <Button variant="secondary">대시보드</Button>
      </Link>
    </>
  );
}
