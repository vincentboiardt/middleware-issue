import { NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/
const LOCALE = /^\/([a-z]{2}-[a-z]{2})(\/.*)?/

// eslint-disable-next-line import/prefer-default-export
export async function middleware(request) {
  console.log(request.nextUrl.pathname)
  // Don't handle public files
  if (PUBLIC_FILE.test(request.nextUrl.pathname)) {
    return undefined
  }

  // Don't handle API routes
  if (request.nextUrl.pathname.includes('/api/')) {
    return undefined
  }

  // For URLs that matches format, rewrite
  const matches = request.nextUrl.pathname.match(LOCALE)
  if (matches[1]) {
    const locale = matches[1]
    const path = matches[2]

    const [language, country] = locale.split('-')
    const pathname = `/${language}/${country}${path}`

    return NextResponse.rewrite(new URL(pathname, request.url))
  }

  return undefined
}
