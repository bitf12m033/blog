'use client'


import Card  from "@/components/Card";
export default function Home() {
  const name = 'Umer';
  return (
    <div className="bg-gray-700">
      <Card>
        <h1 className="text-center text-4xl text-white">Hello {name}</h1>
      </Card>
      
    </div>
  );
}
