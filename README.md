# MSCI Showcase

Website portfolio song ngữ của đội ngũ MSCI, được xây dựng như một không gian triển lãm số cho các dự án công nghệ. Phiên bản hiện tại dùng dữ liệu TypeScript tĩnh, không yêu cầu đăng nhập, dashboard hoặc backend để chạy giao diện.

## Tính năng

- Trang Home, Projects, Project Detail, About, Team, Contact và 404.
- Sáu case study mẫu thuộc nhiều lĩnh vực và bốn hồ sơ thành viên.
- Tìm kiếm, lọc danh mục/trạng thái và chuyển đổi grid/list.
- Chuyển đổi VI/EN tức thì, lưu lựa chọn trong `localStorage`.
- Member modal, project gallery/lightbox, menu mobile và contact form validation.
- Page transition, scroll reveal, hover interaction và `prefers-reduced-motion`.
- Metadata, Open Graph image, JSON-LD, sitemap, robots và web manifest.
- Responsive cho mobile, tablet, desktop và màn hình lớn.

## Công nghệ

- Next.js 16 App Router và React 19.
- TypeScript strict mode.
- Tailwind CSS v4 kết hợp CSS design tokens.
- `next/font` với Manrope, Space Grotesk và JetBrains Mono.
- Dữ liệu showcase trong TypeScript; Supabase SSR đã được cấu hình sẵn cho database và authentication.

## Chạy local

Yêu cầu Node.js 20.9 trở lên.

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

Database không bắt buộc cho phiên bản showcase. Nếu tiếp tục phần Prisma đã scaffold trước đó:

```bash
npm run db:push
```

## Kiểm tra production

```bash
npm run lint
npm run build
npm run start
```

## Biến môi trường

Sao chép `.env.example` thành `.env.local`, sau đó điền cấu hình Supabase của dự án. Các biến cần thiết:

```env
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_SUPABASE_URL="https://your-project-ref.supabase.co"
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY="your-publishable-key"
```

Khi deploy, đặt `NEXT_PUBLIC_APP_URL` thành domain production, ví dụ `https://showcase.example.com`.

Supabase có ba helper trong `src/utils/supabase`: dùng `client.ts` cho Client Components, `server.ts` cho Server Components/Actions/Route Handlers, và `middleware.ts` cho session refresh qua `src/proxy.ts`.

Ví dụ truy vấn trong Server Component:

```tsx
import { createClient } from "@/utils/supabase/server";

export default async function ExamplePage() {
  const supabase = await createClient();
  const { data: todos } = await supabase.from("todos").select();

  return <pre>{JSON.stringify(todos, null, 2)}</pre>;
}
```

Trang chủ showcase không chạy truy vấn mẫu này vì bảng `todos` chưa nằm trong schema của repository.

## Cập nhật nội dung

### Thêm dự án

1. Mở `src/data/projects.ts`.
2. Thêm một object đúng type `Project` trong `src/types/content.ts`.
3. Dùng `slug` duy nhất; route `/projects/[slug]` và sitemap sẽ được tạo tự động.
4. Cung cấp đầy đủ nội dung `vi` và `en`, stack, feature, gallery, challenge và `memberIds`.

### Thêm thành viên

1. Mở `src/data/team.ts`.
2. Thêm object đúng type `TeamMember`.
3. Liên kết thành viên với dự án qua `projectIds` và `memberIds`.
4. Nếu chưa có ảnh, component sẽ hiển thị avatar chữ viết tắt.

### Cập nhật bản dịch

- Nội dung dự án/thành viên dùng cấu trúc `{ vi, en }` trong thư mục `src/data`.
- Nội dung UI theo từng trang nằm trong các component `src/components/pages`.
- Navigation, status và category label nằm trong `src/data/site.ts`.

## Cấu trúc chính

```text
src/
├── app/                    # Routes, metadata, sitemap, robots
├── components/
│   ├── contact/            # Contact form và validation
│   ├── home/               # Statistics và technology marquee
│   ├── layout/             # Header, footer, background, progress
│   ├── pages/              # Nội dung từng trang
│   ├── projects/           # Project card, filter, gallery/lightbox
│   ├── providers/          # Language state
│   ├── team/               # Team cards và member modal
│   └── ui/                 # Dialog, icon, visual, reveal
├── data/                   # Project, member và site data
├── lib/                    # Helper dùng chung
├── utils/supabase/         # Browser/server clients và session refresh
├── proxy.ts                # Next.js 16 request proxy cho Supabase Auth
└── types/                  # Content types
```

## Deploy Vercel

1. Import repository vào Vercel.
2. Chọn root directory `Project-Showcase` nếu đây là monorepo.
3. Thiết lập `NEXT_PUBLIC_APP_URL` và hai biến `NEXT_PUBLIC_SUPABASE_*`.
4. Dùng build command mặc định `npm run build`.

Các social URL và email trong `src/data/site.ts` là dữ liệu mẫu, cần thay bằng thông tin chính thức của MSCI trước khi public.
