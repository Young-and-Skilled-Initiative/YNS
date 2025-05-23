'use client'
import React, { useState } from "react";
import Image from "next/image";
import Story1 from "@/public/images/story-1.svg";
import Story2 from "@/public/images/story-2.svg";
import Story3 from "@/public/images/story-3.svg";
import Story4 from "@/public/images/story-4.svg";
import Story5 from "@/public/story5.svg";
import Story6 from "@/public/story6.svg";
import { X, Eye } from "lucide-react";
import Section from "@/components/layout/Section";

interface ImageModalProps {
  image: string;
  alt: string;
  onClose: () => void;
}

const ImageModal = ({ image, alt, onClose }: ImageModalProps) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 md:hidden"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-lg">
        <button 
          onClick={onClose}
          className="absolute right-2 top-2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <X className="w-6 h-6 text-gray-800" />
        </button>
        <div className="relative w-full h-[80vh]">
          <Image
            src={image}
            alt={alt}
            className="object-contain w-full h-full rounded-lg"
            style={{ maxHeight: "80vh" }}
          />
        </div>
      </div>
    </div>
  );
};

interface StoryImageProps {
  src: string;
  alt: string;
  className: string;
  onClick?: () => void;
}

const StoryImage = ({ src, alt, className, onClick }: StoryImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      onClick={onClick}
      className={`${className} ${onClick ? 'cursor-pointer md:cursor-default' : ''}`}
    />
  );
};

const OurStory = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const handleImageClick = (image: string, alt: string) => {
    if (window.innerWidth < 768) {
      setSelectedImage({ src: image, alt });
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Gallery images data
  const galleryImages = [
    { src: Story1, alt: "Story 1" },
    { src: Story2, alt: "Story 2" },
    { src: Story3, alt: "Story 3" },
    { src: Story4, alt: "Story 4" },
    { src: Story5, alt: "Story 5" },
    { src: Story6, alt: "Story 6" },
  ];

  return (
    <Section>
      <div className="w-full mt-[75px] mx-auto">
        <div className="">
          <div className="w-full flex items-start justify-start lg:items-center lg:justify-center">
            <div className="inline-block text-center px-6 py-2 bg-[#FAFAFA] rounded-full w-[129px]">
              <h3 className="text-[#8E9BAE] font-medium font-manrope text-[16px]">
                Gallery
              </h3>
            </div>
          </div>
          <h2 className="text-[30px] lg:text-center md:text-[40px] leading-[48.64px] font-medium mt-[30px] font-cocon">
            Our Stories
          </h2>
          <p className="mt-4 text-[#00000099] text-base leading-[32px] lg:px-[86px] mx-0 text-left lg:text-center md:mx-auto font-manrope">
            Our learning programs are designed to nurture creativity, critical
            thinking, and collaboration, helping students to become the
            <br className="hidden lg:block" />
            changemakers of tomorrow.
          </p>
          
          {/* Subtle Mobile CTA */}
          <div className="mt-6 flex justify-center md:hidden">
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-100">
              <Eye className="w-4 h-4 text-green-700" />
              <span className="text-sm text-green-700 font-medium font-manrope ">
                Tap images to view full size
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:grid lg:grid-cols-3 gap-5">
          {/* First Column */}
          <div className="lg:space-y-4 flex gap-1 items-center justify-between lg:block">
            <StoryImage
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              onClick={() => handleImageClick(galleryImages[0].src, galleryImages[0].alt)}
              className="w-[33%] h-[120px] md:h-[200px] lg:h-auto lg:w-full object-cover rounded-lg shadow-lg"
            />
            <StoryImage
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              onClick={() => handleImageClick(galleryImages[1].src, galleryImages[1].alt)}
              className="w-[33%] h-[120px] md:h-[200px] lg:h-auto lg:w-full object-cover rounded-lg shadow-lg"
            />
            <StoryImage
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              onClick={() => handleImageClick(galleryImages[2].src, galleryImages[2].alt)}
              className="w-[33%] h-[120px] md:h-[200px] lg:h-auto lg:w-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Second Column - Hidden on mobile */}
          <div className="h-full mt-[12px] lg:mt-0 hidden md:block">
            <StoryImage
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              className="w-full h-[149px] md:h-[200px] lg:h-full object-cover lg:rounded-lg shadow-lg"
            />
          </div>

          {/* Third Column */}
          <div className="mt-[12px] lg:mt-0 lg:space-y-4 flex gap-1 items-center justify-between lg:block rounded-lg overflow-hidden">
            <StoryImage
              src={galleryImages[4].src}
              alt={galleryImages[4].alt}
              onClick={() => handleImageClick(galleryImages[4].src, galleryImages[4].alt)}
              className="w-[50%] h-[120px] md:h-[200px] lg:h-1/2 lg:w-full object-cover lg:rounded-lg shadow-lg"
            />
            <StoryImage
              src={galleryImages[5].src}
              alt={galleryImages[5].alt}
              onClick={() => handleImageClick(galleryImages[5].src, galleryImages[5].alt)}
              className="w-[50%] h-[120px] md:h-[200px] lg:h-1/2 lg:w-full object-cover lg:rounded-lg shadow-md"
            />
          </div>
        </div>

        {selectedImage && (
          <ImageModal
            image={selectedImage.src}
            alt={selectedImage.alt}
            onClose={closeModal}
          />
        )}
      </div>
    </Section>
  );
};

export default OurStory;