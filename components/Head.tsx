import React from "react"
import NextHead from "next/head"

// @ts-ignore
export default function Head({ title }) {
    return (
        <NextHead>
            <title>{title ? title : "WCYS & Co."}</title>
        </NextHead>
    );
}
