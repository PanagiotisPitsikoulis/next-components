import Label from "@/components/highLevel/label/Label";
import Navbar from "@/components/templates/layout/Navbar";
import Card from "@/components/highLevel/card/Card";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Navbar>
        <p className='text-sm'>Hi</p>
        <p className='text-sm'>Free Bitcoin</p>
        <p className='text-sm'>Free Ethereum</p>
        <p className='text-sm'>I cant sleep</p>
      </Navbar>
    </main>
  );
}
