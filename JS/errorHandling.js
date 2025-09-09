const fetchData = async () => {
  try {
    const response = await fetch(
      `https://api.coindesk.com/v1/bpi/currentprice.json`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("Error fetching data:", err.message);
  } finally {
    console.log("Done");
  }
};

// fetchData();

/**
 * safeFetch - A resilient wrapper around fetch() with error typing, fallback, and retry.
 *
 * @param {string} url - Resource URL.
 * @param {object} [options={}] - Config object.
 * @param {RequestInit} [options.fetchOptions] - Passed through to fetch().
 * @param {any} [options.fallback=null] - Value returned if request ultimately fails.
 * @param {number} [options.retries=0] - Number of retry attempts on *network error only*.
 * @param {number} [options.retryDelay=500] - Initial delay (ms) before first retry (exponential backoff).
 * @param {boolean} [options.parseJson=true] - Whether to parse response as JSON. If false, returns Response/body text.
 * @param {(attempt:number,err:any)=>void} [options.onRetry] - Optional hook called before each retry.
 *
 * @returns {Promise<{ok:boolean,data:any,error:null|{type:string,message:string,status?:number,raw?:any}}>}
 *
 * Error types: "network", "http", "parse"
 */

async function safeFetch(
  url,
  {
    fetchOptions = {},
    fallback = null,
    retries = 0,
    retryDelay = 500,
    parseJson = true,
    onRetry,
  } = {}
) {
  let attempt = 0;
  let lastError = null;

  // internal sleep helper
  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  while (attempt <= retries) {
    try {
      const response = await fetch(url, fetchOptions);

      // HTTP status error?
      if (!response.ok) {
        const msg = `HTTP error ${response.status} ${response.statusText}`;
        const errorObj = {
          type: "http",
          message: msg,
          status: response.status,
        };
        console.error("[safeFetch] HTTP:", msg);
        return { ok: false, data: fallback, error: errorObj };
      }

      // parse or return raw
      if (!parseJson) {
        const text = await response.text();
        return { ok: true, data: text, error: null };
      }

      // JSON parse guarded
      try {
        const data = await response.json();
        return { ok: true, data, error: null };
      } catch (parseErr) {
        const msg = `Failed to parse JSON: ${parseErr.message}`;
        const errorObj = { type: "parse", message: msg, raw: parseErr };
        console.error("[safeFetch] Parse:", msg);
        return { ok: false, data: fallback, error: errorObj };
      }
    } catch (networkErr) {
      // This is a *network* failure (fetch threw)
      lastError = networkErr;
      const msg = `Network error: ${networkErr.message || networkErr}`;
      console.error("[safeFetch] Network:", msg);

      // Decide whether to retry
      if (attempt < retries) {
        if (typeof onRetry === "function") {
          onRetry(attempt + 1, networkErr);
        }
        // exponential backoff: delay * (2^attempt)
        const wait = retryDelay * Math.pow(2, attempt);
        await sleep(wait);
        attempt++;
        continue; // retry loop
      }

      // no more retries
      const errorObj = { type: "network", message: msg, raw: networkErr };
      return { ok: false, data: fallback, error: errorObj };
    }
  }

  // Shouldn't reach here, but safeguard
  const errorObj = {
    type: "unknown",
    message: "Unknown error",
    raw: lastError,
  };
  return { ok: false, data: fallback, error: errorObj };
}

// (async () => {
//   const result = await safeFetch(
//     "https://jsonplaceholder.typicode.com/todos/1"
//   );
//   if (result.ok) {
//     console.log("BTC Price Data:", result.data);
//   } else {
//     console.warn("Failed:", result.error);
//   }
// })();

// const fallbackData = { bpi: { USD: { rate: "N/A" } } };

// (async () => {
//   const result = await safeFetch("https://invalid-url.example.com", {
//     fallback: fallbackData,
//   });
//   console.log("Data:", result.data); // fallback returned on error
// })();

// (async () => {
//   const result = await safeFetch("https://unstable-api.example.com/data", {
//     retries: 3,
//     retryDelay: 500,
//     onRetry: (attempt, err) => {
//       console.log(`Retry #${attempt} after error:`, err.message);
//     },
//   });

//   if (!result.ok) {
//     console.error("All retries failed:", result.error);
//   }
// })();

(async () => {
  const payload = { email: "test@example.com" };
  const result = await safeFetch("https://jsonplaceholder.typicode.com/posts", {
    fetchOptions: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    },
  });

  if (result.ok) {
    console.log("Created:", result.data);
  } else {
    console.error("Error:", result.error);
  }
})();
