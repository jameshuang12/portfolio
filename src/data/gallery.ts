export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description?: string;
  category: string;
}

export const galleryData: GalleryImage[] = [
  {
    id: "me-profile",
    src: "/images/me.jpg",
    alt: "James Huang - Professional Photo",
    title: "Professional Photo",
    description: "Professional headshot",
    category: "Professional",
  },
  {
    id: "me-nyc",
    src: "/images/me_nyc.jpg",
    alt: "James Huang in New York City",
    title: "New York City",
    description: "Exploring NYC",
    category: "Personal",
  },
  {
    id: "me-baseball",
    src: "/images/me_baseball.jpg",
    alt: "James Huang at Baseball Game",
    title: "Baseball Game",
    description: "Enjoying a baseball game",
    category: "Personal",
  },
  {
    id: "nyc-skyline",
    src: "/images/NYC.png",
    alt: "New York City Skyline",
    title: "NYC Skyline",
    description: "Beautiful NYC skyline view",
    category: "Places",
  },
  {
    id: "vanderbilt",
    src: "/images/VANDY.png",
    alt: "Vanderbilt",
    title: "Vanderbilt",
    description: "Vanderbilt University",
    category: "Education",
  },
];

export const galleryCategories = [
  "All",
  "Professional",
  "Personal",
  "Places",
  "Education",
];

// Instructions for adding new images:
// 1. Add your image to public/images/
// 2. Copy the template below and fill in details
// 3. Add to the galleryData array above

/*
TEMPLATE - Copy this to add a new image:

{
  id: "unique-image-id",
  src: "/portfolio/images/your-image.jpg",
  alt: "Descriptive alt text for accessibility",
  title: "Image Title",
  description: "Brief description of the image",
  category: "Professional", // or Personal, Places, Education, etc.
},

*/

// Made with Bob
