type PageType = {
  name: string;
  path: string;
};

export const pageData: PageType[] = [
  { name: "Solar Only", path: "/" },
  { name: "Battery Only", path: "/battery" },
  { name: "Solar and Battery", path: "/solar_and_battery" },
];
