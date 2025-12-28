import React from "react";

export const NaverBlogIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <image
        href="/images/naver_blog.svg"
        width="24"
        height="24"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
};

export default NaverBlogIcon;
