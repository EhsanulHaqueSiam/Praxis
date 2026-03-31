//#region src/lib/urls.ts
var APP_TARGET = (void 0)?.trim() || "/app";
function normalizePath(path) {
	if (!path) return "/";
	return path.startsWith("/") ? path : `/${path}`;
}
function stripTrailingSlash(value) {
	return value.replace(/\/+$/, "");
}
function appHref(path) {
	const normalizedPath = normalizePath(path);
	if (/^https?:\/\//i.test(APP_TARGET)) return `${stripTrailingSlash(APP_TARGET)}${normalizedPath}`;
	if (APP_TARGET === "/" || APP_TARGET === "") return normalizedPath;
	return `${stripTrailingSlash(APP_TARGET)}${normalizedPath}`;
}
//#endregion
export { appHref as t };
