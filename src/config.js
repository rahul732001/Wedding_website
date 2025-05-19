const siteConfig = {
  bride: "Appu",
  groom: "Amar",
  brideFamily: {
    title: "The Bride",
    name: "Appu",
    members: [
      { role: "Parents", names: "Mr. Rajeev Ranjan Sinha & Mrs. Deepa Sinha" },
      { role: "Sister", names: "Ankita Raj" },
      { role: "Brother-in-law", names: "Puneet Srivasthava" },
    ],
  },
  groomFamily: {
    title: "The Groom",
    name: "Amar",
    members: [{ role: "Parents", names: "Mr. Debasis Sen & Mrs. Rina Sen" }],
  },
  weddingDate: "2025-06-30T15:00:00",
  events: [
    {
      title: "Haldi Ceremony",
      datetime: "May 22nd, 2025 at 10:30 AM",
      venue: "Private Residence",
      address: "248 Lily Ln, Kennett Square, PA - 19348",
      mapLink:
        "https://maps.google.com/?q=248+Lily+Ln,+Kennett+Square,+PA+19348",
    },
    {
      title: "Sangeet",
      datetime: "May 23rd, 2025 at 6:00 PM",
      venue: "Hilton, Exton",
      address: "720 Eagleview Blvd, E, Exton PA - 19341",
      mapLink: "https://maps.google.com/?q=Hilton,+Exton,+PA",
    },
    {
      title: "Wedding Ceremony",
      datetime: "May 24th, 2025 at 3:00 PM",
      venue: "Private Residence",
      address: "248 Lily Ln, Kennett Square, PA - 19348",
      mapLink:
        "https://maps.google.com/?q=248+Lily+Ln,+Kennett+Square,+PA+19348",
    },
  ],
  // this is your Apps Script Web App URL
  sheetWebhookUrl:
    "https://script.google.com/macros/s/AKfycbxyv-Cq3VKPP_yQ0qnV34e_GXSd08nj4M7-CCTwyBBGZ6dV4RG1cL6dK0SZImIcOYPnNw/exec",
  tagline: "We can’t wait to celebrate with you!",
};

export default siteConfig;
