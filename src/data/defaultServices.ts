import { ServiceItem } from '../pages/Admin';

export const defaultServices: ServiceItem[] = [
  {
    id: "ac-general",
    categoryId: "ac-repair-and-service",
    title: "AC General Service",
    description: "- Per AC (1 to 2.5 tons)",
    price: 3300,
    discountPrice: 2500,
    rating: 4.3,
    slug: "ac-general-service",
    isTrendy: true
  },
  {
    id: "ac-installation",
    categoryId: "ac-repair-and-service",
    title: "AC Installation",
    description: "- Installation with 10 Feet pipe (1 to 2.5 tons)",
    price: 5100,
    discountPrice: 3200,
    rating: 4.4,
    slug: "ac-installation"
  },
  {
    id: "ac-repairing",
    categoryId: "ac-repair-and-service",
    title: "AC Repairing",
    description: "- Visit and Inspection Charges",
    price: 1000,
    discountPrice: 800,
    rating: 4.3,
    slug: "ac-repairing",
    isSeasonal: true
  },
  {
    id: "ac-mounting",
    categoryId: "ac-repair-and-service",
    title: "AC Mounting and Dismounting",
    description: "- Per AC (1 to 2.5 tons)",
    price: 6400,
    discountPrice: 4000,
    rating: 4.6,
    slug: "ac-mounting-dismounting"
  },
  {
    id: "ac-dismounting",
    categoryId: "ac-repair-and-service",
    title: "AC Dismounting",
    description: "- Per AC (1 to 2.5 tons)",
    price: 1500,
    discountPrice: 1200,
    rating: 4.8,
    slug: "ac-dismounting"
  },
  {
    id: "ac-all",
    categoryId: "ac-repair-and-service",
    title: "AC Mounting and Dismounting + AC General Service",
    description: "- Per AC (1 to 2.5 tons)",
    price: 8500,
    discountPrice: 5500,
    rating: 4.9,
    slug: "ac-full"
  },
  {
    id: "plumb-basic",
    categoryId: "plumbing-services",
    title: "Basic Plumbing Visit",
    description: "- Diagnostics and minor fixes",
    price: 1200,
    rating: 4.5,
    slug: "basic-plumbing-visit"
  }
];
