"use client";;
import React from "react";
import { cn } from "../../lib/utils";
import Link from "next/link";

export default function PulsatingButton({
  className,
  children,
  pulseColor = "#80550c",
  duration = "1.5s",
  ...props
}) {
  return (
    (<Link
    href='/dashboard'
    prefetch={false}
      className={cn(
        "relative text-center cursor-pointer flex justify-center items-center rounded-lg text-white dark:text-black bg-[#a38d67] dark:bg-blue-500 px-4 py-2",
        className
      )}
      style={
        {
          "--pulse-color": pulseColor,
          "--duration": duration
        }
      }
      {...props}>
      <div className="relative z-10">{children}</div>
      <div
        className="absolute top-1/2 left-1/2 size-full rounded-lg bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2" />
    </Link>)
  );
}
