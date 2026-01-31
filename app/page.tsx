import dbConnect from "@/lib/mongodb";

export default async function Home() {
  await dbConnect();

  return (
    <main style={{ padding: "40px", fontSize: "20px" }}>
      ✅ MongoDB Connected Successfully
    </main>
  );
}
