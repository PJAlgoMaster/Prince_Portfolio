import { NextResponse } from "next/server";
export async function GET() {
  const res = await fetch('https://api.github.com/users/PjAlgoMaster/repos', { next: { revalidate: 3600 } });
  const data = await res.json();
  return NextResponse.json(data)
}
