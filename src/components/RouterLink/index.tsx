import type React from "react"
import {Link} from "react-router"
import { memo } from "react";
type RouterLinkProps = {
  children: React.ReactNode;
  href: string;
} & React.ComponentProps<"a">;

export const RouterLink = memo(({children, href, ...props}: RouterLinkProps) => {
return (
  <Link to={href} {...props}>
    {children}
  </Link>
)
})