import { defaultClothingItems } from "./defaultClothingItems";

// Used only in demo mode, when the backend is not available.
// Nothing here is saved: everything resets when the page reloads.

export const DEMO_USER_ID = "demo-user";

export function getDemoItems() {
  return defaultClothingItems.map((item) => ({
    _id: String(item._id),
    name: item.name,
    weather: item.weather,
    imageUrl: item.link,
    likes: [],
  }));
}

export function createDemoUser({ name, avatar = "", email }) {
  return {
    _id: DEMO_USER_ID,
    name: name || email.split("@")[0],
    avatar,
    email,
  };
}
