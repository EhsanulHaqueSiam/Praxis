const RAW_APP_BASEPATH = (import.meta.env.VITE_APP_BASEPATH as string | undefined)?.trim() || "/app";
const MARKETING_TARGET = (import.meta.env.VITE_MARKETING_TARGET as string | undefined)?.trim() || "/";

function normalizePath(path: string) {
  if (!path) return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

function stripTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}

function normalizeBasepath(value: string) {
  if (!value || value === "/") return "/";
  const cleaned = value.replace(/^\/+|\/+$/g, "");
  return cleaned ? `/${cleaned}` : "/";
}

export const APP_BASEPATH = normalizeBasepath(RAW_APP_BASEPATH);

export function appHref(path: string) {
  const normalizedPath = normalizePath(path);
  return APP_BASEPATH === "/" ? normalizedPath : `${APP_BASEPATH}${normalizedPath}`;
}

export function marketingHref(path: string) {
  const normalizedPath = normalizePath(path);

  if (/^https?:\/\//i.test(MARKETING_TARGET)) {
    return `${stripTrailingSlash(MARKETING_TARGET)}${normalizedPath}`;
  }

  if (MARKETING_TARGET === "/" || MARKETING_TARGET === "") {
    return normalizedPath;
  }

  return `${stripTrailingSlash(MARKETING_TARGET)}${normalizedPath}`;
}
