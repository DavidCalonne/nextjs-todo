"use client";

import React, { ReactNode } from "react";

interface TitleProps {
  type?: "h1" | "h2" | "h3" | "h4" | "h5";
  children: ReactNode;
}

export default function Title({ type = "h2", children }: TitleProps) {
  const Tag = type;
  return <Tag className="flex gap5 fa-c fj-c">{children}</Tag>;
}
