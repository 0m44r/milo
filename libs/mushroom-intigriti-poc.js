// Adobe bug bounty PoC artifact - researcher mushroom@intigriti - 2026-11-05
// Benign test file ADDED by an unauthenticated caller through the Edge Delivery admin API.
// No existing Adobe file was modified. Nothing on any Adobe site references this file.
// Retained as proof for a bug bounty report; Adobe may delete it at any time.
console.log("adobe bugbounty poc mushroom@intigriti");
window.__mushroom_intigriti_poc = { origin: location.origin, at: new Date().toISOString() };
alert("XSS proof on " + location.origin + "\nadobe bugbounty poc mushroom@intigriti");
