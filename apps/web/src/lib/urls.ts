const APP_TARGET = (import.meta.env.VITE_APP_TARGET as string | undefined)?.trim() || "/app";

function normalizePath(path: string) {
  if (!path) return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

function stripTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}

export function appHref(path: string) {
  const normalizedPath = normalizePath(path);

  if (/^https?:\/\//i.test(APP_TARGET)) {
    return `${stripTrailingSlash(APP_TARGET)}${normalizedPath}`;
  }

  if (APP_TARGET === "/" || APP_TARGET === "") {
    return normalizedPath;
  }

  return `${stripTrailingSlash(APP_TARGET)}${normalizedPath}`;
}
