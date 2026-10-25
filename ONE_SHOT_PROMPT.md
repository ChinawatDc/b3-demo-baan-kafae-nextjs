# One-shot Prompt — บ้านกาแฟริมคลอง (Next.js)

วางข้อความด้านล่างทั้งก้อนให้ Cursor / Claude / Agent ของคุณ **ครั้งเดียว**  
อย่าแยกเป็นหลายรอบถ้าไม่จำเป็น

---

```text
คุณคือ senior frontend ที่สร้าง landing page ร้านกาแฟไทยให้สวย เข้าถึงได้ และบิลด์ไม่พัง

## เป้าหมาย
สร้างโปรเจกต์ one-page ชื่อ b3-demo-baan-kafae-nextjs:
Next.js (App Router) + Tailwind + static landing “บ้านกาแฟริมคลอง” (ร้านสมมติ) แล้ว deploy Vercel ผ่าน GitHub

## Hard rules
1. โหลด / ใช้สกิล UI/UX Pro Max (หรือเทียบเท่า) ก่อนออกแบบ — ห้าม purple gradient / Inter เปล่าๆ / การ์ดเงาหนา / ป้ายลอยบน hero
2. ข้อมูลทั้งหมดเป็นร้านสมมติ — ห้ามใส่เบอร์จริง / LINE จริง / ที่อยู่จริง · ลิงก์ติดต่อเป็น `#` · ใส่ meta robots noindex,nofollow
3. มีแถบ sticky ด้านบนตลอด: “เว็บตัวอย่างผลงาน ร้านสมมติ”
4. ห้ามใช้ stock photo — ใช้กล่อง placeholder หรือ SVG line illustration ใน public/illustrations/
5. ข้อความทั้งหมดอยู่ใน src/data/site.ts เท่านั้น (แก้เนื้อหาที่ไฟล์เดียว)
6. Tailwind v4: ห้าม @apply คลาสคอมโพเนนต์ทับกันเอง (เช่น อย่า @apply btn ภายใน .btn-line)
7. Next.js 16 + Cache Components: หน้านี้ static ได้ ไม่ต้อง force-dynamic
8. ปุ่มสูงอย่างน้อย 44px, focus ring ชัด, รองรับ prefers-reduced-motion, ไม่มี horizontal scroll ที่ 390px
9. อย่า commit .env / .vercel · มี LICENSE MIT + README พร้อมลิงก์ live
10. สร้าง/อัปเดต GitHub repo ChinawatDc/b3-demo-baan-kafae-nextjs (public) แล้ว deploy Vercel

## Visual (บังคับ · direction “ริมน้ำยามเช้า”)
สี (CSS variables / Tailwind theme):
- cream #FBF6EE · sand #E9DCC6 · paper #FFF8EC
- green #5E8C7E · green-ink #3F6659 · green-soft #7FA597
- caramel #C9773E · caramel-ink #A35A26
- ink #2B2A26 · line #06C755 · ph #D6C4A5 · ph-ink #5A4A33 · rule #CDBFA8

ฟอนต์ (next/font):
- head = Pridi 600
- en eyebrow = Fraunces 500 (uppercase, letter-spacing ~0.22em)
- body = Sarabun 400/600, 17px/1.7

รูปทรง:
- radius arch = 200px 200px 12px 12px สำหรับรูป hero / why cards
- max-width wrap = 1120px · padding 20px mobile / 32px md+
- ปุ่ม LINE = พื้น #06C755 ตัวอักษร ink (อย่าใช้ตัวขาวบนเขียว — contrast ไม่พอ)

## โครงสร้างหน้า (one-page)
1. Sticky demo banner
2. Hero (nav + ข้อความ 2 บรรทัด + CTA LINE/แผนที่ + รูป arch)
3. WhyUs — 3 การ์ด arch (คั่วเอง / โต๊ะติดคลอง / ขนมอบเช้า)
4. Menu (#menu) — รายการราคา 2 คอลัมน์ เส้นประ
5. Gallery (#gallery) — กริด 5 ช่อง (desktop 2fr/1fr/1fr × 2 แถว)
6. Visit (#visit) — พื้น green-ink ตัวอักษรขาว + แผนที่ placeholder
7. Footer + ปุ่ม LINE ลอยเฉพาะมือถือ

## เนื้อหาหลัก (คัดลอกได้)
- ชื่อร้าน: บ้านกาแฟริมคลอง
- Hero: กาแฟคั่วเอง / ริมคลองหลังบ้าน
- Lead: นั่งจิบกาแฟช้าๆ ฟังเสียงน้ำ ขนมอบใหม่ทุกเช้า เปิดทุกวัน 7:00–17:00
- เมนูตัวอย่าง: อเมริกาโน่ส้มยูซุ 75 · ลาเต้มะพร้าวเผา 85 · ดริปเมล็ดประจำสัปดาห์ 90 · ชาไทยริมคลอง 65 · ครัวซองต์เนยสด 70 · บานอฟฟี่โฮมเมด 95
- credit: ทำเว็บโดย B3 Web Studio · Next.js

## ลำดับงาน
1) Scaffold Next.js (TS, App Router, Tailwind, src/)
2) ตั้ง design tokens ใน globals.css (@theme)
3) เขียน src/data/site.ts + illustrations.ts
4) สร้าง components: Placeholder, Hero, WhyUs, Menu, Gallery, Visit, Footer
5) ประกอบหน้าใน app/page.tsx + layout (lang=th, metadata, noindex, skip link)
6) ใส่ SVG illustrations ใน public/illustrations/ (หรือ placeholder ถ้ายังไม่มีไฟล์)
7) npm run build ต้องผ่าน
8) Push GitHub + deploy Vercel · homepage = production URL

## Definition of done
- เปิดหน้าแล้วเห็น landing ครบทุก section ตาม visual ข้างบน
- Build / deploy ผ่าน · มี live URL
- README อธิบาย stack + โครงสร้าง + ลิงก์ ONE_SHOT_PROMPT.md
- ไม่มีข้อมูลติดต่อจริงใน repo
```

---

## ใช้ยังไง

1. เปิด Agent mode ใน Cursor
2. วางพรอมต์ด้านบนทั้งก้อน
3. อนุมัติ GitHub / Vercel เมื่อ Agent ขอ
4. แปะลิงก์ repo + live demo ในคอมเมนต์ปักหมุดได้เลย

**Repo:** https://github.com/ChinawatDc/b3-demo-baan-kafae-nextjs  
**Live:** https://b3-demo-baan-kafae-nextjs.vercel.app
