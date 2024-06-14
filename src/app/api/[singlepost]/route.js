import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

// GET SINGLE POST
export default async function GET(req, params) {
  const searchParams = new URLSearchParams(req.url);
  const page = searchParams.get("page");
  const cat = searchParams.get("cat");

  const POST_PER_PAGE = 2;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: {
      ...(cat && { catslug: cat }),
    },
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      // You might have other queries here if needed
    ]);
    
    // Further processing of retrieved data
    
    return NextResponse.ok(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.error(error.message);
  }
}
