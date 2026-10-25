# บ้านกาแฟริมคลอง — Next.js

[![Live](https://img.shields.io/badge/demo-Vercel-5E8C7E?style=flat-square)](https://b3-demo-baan-kafae-nextjs.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](./LICENSE)

เวอร์ชัน **Next.js** ของ Landing ตัวอย่างผลงาน B3 Web Studio  
ร้านกาแฟริมคลองแบบ static หน้าเดียว · **ข้อมูลทั้งหมดสมมติ**

> แถบด้านบน: `เว็บตัวอย่างผลงาน ร้านสมมติ` · `noindex` · ลิงก์ติดต่อเป็น `#`

**Live:** https://b3-demo-baan-kafae-nextjs.vercel.app  
Astro ต้นฉบับ: https://github.com/ChinawatDc/b3-demo-baan-kafae

สั่ง AI Agent ทีเดียวให้ได้แบบนี้ → คัดลอกพรอมต์ใน [`ONE_SHOT_PROMPT.md`](./ONE_SHOT_PROMPT.md)

## Stack

- Next.js 16 (App Router) · React 19 · Tailwind 4
- ฟอนต์: Pridi · Fraunces · Sarabun (`next/font`)
- ภาพ: line illustration ใน `public/illustrations/` (ไม่ใช้ stock)

## รันท้องถิ่น

```bash
npm ci
npm run dev
npm run build
```

## โครงสร้าง

```
src/data/site.ts          # ข้อความทั้งหมด
src/components/           # Hero · WhyUs · Menu · Gallery · Visit · Footer
src/app/page.tsx          # one-page
public/illustrations/     # SVG จาก DESIGNER
```

## หมายเหตุ

ร้านสมมติสำหรับผลงานตัวอย่าง — ไม่มีเบอร์/LINE/ที่อยู่จริง
