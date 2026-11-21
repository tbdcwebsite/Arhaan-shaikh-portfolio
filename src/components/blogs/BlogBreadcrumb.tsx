import React from "react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BlogBreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function BlogBreadcrumb({ items }: BlogBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center flex-wrap gap-2.5 text-xs font-bold uppercase tracking-wider text-[#6F6A5D] mb-6 select-none"
    >
      <Link
        href="/"
        className="text-[#6F6A5D] hover:text-[#EF8557] transition-colors"
      >
        Home
      </Link>

      <span className="text-[#121214]/25" aria-hidden="true">
        /
      </span>

      <Link
        href="/blogs"
        className="text-[#6F6A5D] hover:text-[#EF8557] transition-colors"
      >
        Notes on Growth
      </Link>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={item.label + idx}>
            <span className="text-[#121214]/25" aria-hidden="true">
              /
            </span>
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-[#6F6A5D] hover:text-[#EF8557] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="text-[#121214] max-w-[280px] sm:max-w-md truncate"
                aria-current="page"
              >
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
