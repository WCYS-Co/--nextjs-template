import React from "react"
import NextHead from "next/head"

export default function Head({ title }) {
  return (
    <NextHead>
      <title>{title ? title : "Untitled site"}</title>
    </NextHead>
  );
}
