import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";

export const dynamic = "force-static";

export async function POST(req: NextRequest) {
  let { htmlContent } = await req.json();
  if (!htmlContent) {
    return NextResponse.json(
      { message: "HTML content is required" },
      { status: 400 }
    );
  }

  // Tailwind CDN 추가
  const tailwindCDN = `
   <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
   <style>
     body { font-family: 'Inter', sans-serif; }
   </style>
 `;

  htmlContent = `
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       ${tailwindCDN}
     </head>
     <body>
       ${htmlContent}
     </body>
   </html>
 `;
  const baseUrl = "http://localhost:3000"; // TODO : 서버 주소로 변경 필요
  htmlContent = htmlContent.replace(/src="\/(.*?)"/g, `src="${baseUrl}/$1"`);

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    // HTML 콘텐츠 설정
    await page.setContent(htmlContent, { waitUntil: "load" });

    // PDF 생성
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "20mm", bottom: "20mm", left: "10mm", right: "10mm" },
    });

    await browser.close();

    // PDF 반환
    const response = new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=generated.pdf",
      },
    });

    return response;
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json(
      { message: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
