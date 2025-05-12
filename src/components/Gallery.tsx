"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1",
    alt: "Classic haircut",
    width: 600,
    height: 800,
  },
  {
    src: "https://images.unsplash.com/photo-1521490683712-35a1cb235d1c",
    alt: "Beard trimming",
    width: 600,
    height: 400,
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a",
    alt: "Hot towel shave",
    width: 600,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1622296089863-eb7fc530daa8",
    alt: "Styling",
    width: 600,
    height: 800,
  },
  {
    src: "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5",
    alt: "Grooming products",
    width: 600,
    height: 400,
  },
  {
    src: "https://images.unsplash.com/photo-1512690459411-b9245aed614b",
    alt: "Interior",
    width: 600,
    height: 600,
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Work
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            A showcase of our finest cuts and styles
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] group overflow-hidden rounded-lg shadow-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    {image.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 