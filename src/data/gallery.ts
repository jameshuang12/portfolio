/**
 * Gallery Data
 *
 * Images displayed in the Gallery section.
 * Add images to public/images/ and reference them here.
 * Use categories to organize images (Professional, Milestones, Travel, Food).
 *
 * @module data/gallery
 */

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description?: string;
  category: string;
  width: number;
  height: number;
}

export const galleryData: GalleryImage[] = [
  {
    id: "me-profile",
    src: "/images/me.jpg",
    alt: "James Huang - Professional Photo",
    title: "Professional Photo",
    description: "A professional headshot",
    category: "Professional",
    width: 400,
    height: 400,
  },
  {
    id: "graduation",
    src: "/images/gallery-graduation.jpg",
    alt: "James Huang at Vanderbilt graduation with family",
    title: "Vanderbilt Graduation",
    description: "Celebrating Vanderbilt commencement with family",
    category: "Milestones",
    width: 1350,
    height: 1800,
  },
  {
    id: "nyc-skyline",
    src: "/images/gallery-nyc-skyline.jpg",
    alt: "New York City skyline at sunset",
    title: "New York City",
    description: "Based in New York City",
    category: "Home",
    width: 1800,
    height: 1012,
  },
  {
    id: "hong-kong-skyline",
    src: "/images/gallery-hong-kong-skyline.jpg",
    alt: "Hong Kong skyline at night from Victoria Harbour",
    title: "Hong Kong Skyline",
    description: "An appreciation for travel and exploring new places",
    category: "Travel",
    width: 1200,
    height: 1800,
  },
  {
    id: "tasting-menu",
    src: "/images/gallery-tasting-menu.jpg",
    alt: "Courses from a multi-course tasting menu",
    title: "Tasting Menu",
    description: "An interest in culinary exploration and trying new cuisines",
    category: "Food",
    width: 1012,
    height: 1800,
  },
  {
    id: "duck-dish",
    src: "/images/gallery-duck-dish.jpg",
    alt: "Seared duck course at a restaurant",
    title: "Seared Duck",
    description: "Duck remains one of my favorite dishes",
    category: "Food",
    width: 1800,
    height: 1141,
  },
];

export const galleryCategories = [
  "All",
  "Professional",
  "Milestones",
  "Home",
  "Travel",
  "Food",
];

// Instructions for adding new images:
// 1. Add your image to public/images/
// 2. Copy the template below and fill in details
// 3. Add to the galleryData array above

/*
TEMPLATE - Copy this to add a new image:

{
  id: "unique-image-id",
  src: "/images/your-image.jpg",
  alt: "Descriptive alt text for accessibility",
  title: "Image Title",
  description: "Brief description of the image",
  category: "Professional", // or Milestones, Travel, Food, etc.
},

*/
