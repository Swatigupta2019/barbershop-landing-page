"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "Regular Client",
    image: "https://i.pravatar.cc/150?img=1",
    content: "Best haircut experience in Denton! The attention to detail and professional service keeps me coming back.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Johnson",
    role: "Business Professional",
    image: "https://i.pravatar.cc/150?img=2",
    content: "Their hot towel shave service is exceptional. It&apos;s more than a haircut - it&apos;s a premium grooming experience.",
    rating: 5
  },
  {
    id: 3,
    name: "David Williams",
    role: "Local Resident",
    image: "https://i.pravatar.cc/150?img=3",
    content: "The skill and precision in their beard trimming services is unmatched. Highly recommended!",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Don&apos;t just take our word for it
          </p>
        </div>

        <div className="mt-20">
          <div className="relative h-[400px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-6">
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <StarIcon key={i} className="h-6 w-6 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-xl italic text-center max-w-2xl mb-6">
                    &ldquo;{testimonials[currentTestimonial].content}&rdquo;
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-400">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? 'bg-white' : 'bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 