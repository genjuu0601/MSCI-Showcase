import type { SVGProps } from "react";

export type IconName =
  | "arrow-right"
  | "arrow-up-right"
  | "chart"
  | "check"
  | "chevron-left"
  | "chevron-right"
  | "chevron-up"
  | "close"
  | "code"
  | "copy"
  | "filter"
  | "github"
  | "grid"
  | "layers"
  | "linkedin"
  | "list"
  | "mail"
  | "menu"
  | "search"
  | "send"
  | "shield"
  | "spark"
  | "users";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  label?: string;
}

function IconPaths({ name }: { name: IconName }) {
  switch (name) {
    case "arrow-right":
      return <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>;
    case "arrow-up-right":
      return <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>;
    case "chart":
      return <><path d="M4 19V9" /><path d="M10 19V5" /><path d="M16 19v-7" /><path d="M3 19h18" /></>;
    case "check":
      return <path d="m5 12 4 4L19 6" />;
    case "chevron-left":
      return <path d="m15 18-6-6 6-6" />;
    case "chevron-right":
      return <path d="m9 18 6-6-6-6" />;
    case "chevron-up":
      return <path d="m6 15 6-6 6 6" />;
    case "close":
      return <><path d="M6 6l12 12" /><path d="M18 6 6 18" /></>;
    case "code":
      return <><path d="m8 9-3 3 3 3" /><path d="m16 9 3 3-3 3" /><path d="m14 5-4 14" /></>;
    case "copy":
      return <><rect x="8" y="8" width="11" height="11" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></>;
    case "filter":
      return <path d="M4 5h16l-6 7v5l-4 2v-7z" />;
    case "github":
      return <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4 5.1 5.1 0 0 0 19.1.5S17.9.1 15 2a13.4 13.4 0 0 0-7 0C5.1.1 3.9.5 3.9.5A5.1 5.1 0 0 0 3.7 4a5.5 5.5 0 0 0-1.5 3.8c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />;
    case "grid":
      return <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>;
    case "layers":
      return <><path d="m12 2 9 5-9 5-9-5z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></>;
    case "linkedin":
      return <><rect x="3" y="9" width="4" height="12" /><path d="M5 3.5v.01" /><path d="M11 21V9h4v2c1-2 6-3 6 3.5V21h-4v-6c0-2-2-2-2 0v6z" /></>;
    case "list":
      return <><path d="M8 6h13" /><path d="M8 12h13" /><path d="M8 18h13" /><path d="M3 6h.01" /><path d="M3 12h.01" /><path d="M3 18h.01" /></>;
    case "mail":
      return <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>;
    case "menu":
      return <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>;
    case "search":
      return <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>;
    case "send":
      return <><path d="m22 2-7 20-4-9-9-4z" /><path d="M22 2 11 13" /></>;
    case "shield":
      return <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></>;
    case "spark":
      return <><path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" /><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z" /></>;
    case "users":
      return <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9" /><path d="M16 3.1a4 4 0 0 1 0 7.8" /></>;
  }
}

export function Icon({ name, label, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      {...props}
    >
      {label ? <title>{label}</title> : null}
      <IconPaths name={name} />
    </svg>
  );
}
