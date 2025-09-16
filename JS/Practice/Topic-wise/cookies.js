// 1. What are Cookies?
// Small pieces of data stored in the browser, typically sent by the server.
// Automatically included in HTTP requests to the same domain (if not blocked by settings).

// Often used for:
// Session tracking
// Authentication (session IDs)
// Storing small user preferences

// 2. Storage Options in the Browser
// a. Cookies
// Size: ~4 KB limit.
// Automatic: Sent with every request to the server.
// Security attributes: httpOnly, secure, SameSite.
// Expires: Can be persistent or session-based.

// b. localStorage
// Size: ~5-10 MB.
// Scope: Data persists until manually cleared.
// Not sent to the server automatically.

// c. sessionStorage
// Same as localStorage but cleared when the browser tab is closed.

// 3. Cookie Attributes
// expires or max-age: Set expiry time.
// secure: Only sent over HTTPS.
// httpOnly: Not accessible via JavaScript (server-only).
// SameSite: Prevents CSRF attacks (Strict / Lax / None).

// 4. Setting & Getting Cookies in JavaScript

// Set a cookie
document.cookie = "username=John; path=/; max-age=3600"; // Expires in 1 hour

// Get all cookies
console.log(document.cookie);

// Read a specific cookie
function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    const [key, value] = cookie.split('=');
    if (key === name) return value;
  }
  return null;
}
console.log(getCookie('username'));


// 5. When to Use Cookies vs localStorage
// Cookies: Best for server-based sessions (e.g., httpOnly cookies for JWT/session IDs).
// localStorage/sessionStorage: Best for client-only data (UI preferences, caching).

// 6. Storing JWT Tokens
// Option 1: httpOnly Cookies (Recommended)
// Server sets the token in a cookie (not accessible via JS).
// Secure against XSS but requires CSRF protection.

// Option 2: localStorage
// Accessible via JS, but vulnerable to XSS if not handled carefully.
// Often used in SPA apps with proper sanitization.

