export function LocalStorageInit() {
  const isLoggin = localStorage.getItem("isLogin");
  if (!isLoggin) localStorage.setItem("isLogin", "-1");
}
