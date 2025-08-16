const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

export async function apiFetch(path: string, options?: RequestInit) {
  const url = `${BASE_URL}${path}`;
  let res = await fetch(url, { ...options, credentials: "include" });

  if (res.status === 401) {
    //  Refresh Token access token
    const refreshRes = await fetch(`${BASE_URL}/auth/refresh`, {
      method: "POST",
      credentials: "include",
    });

    if (refreshRes.ok) {
      // access token  request retry
      res = await fetch(url, { ...options, credentials: "include" });
    } else {
      //  Refresh  logout
      window.location.href = "/login";
      throw new Error("Unauthorized - Please login again");
    }
  }

  if (!res.ok) {
    throw new Error(`API request failed with status ${res.status}`);
  }

  return res.json();
}
