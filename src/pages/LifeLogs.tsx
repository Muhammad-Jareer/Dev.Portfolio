import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import TagFilter from '@/components/TabFilter';
import FloatingDecorativeCircle from '@/components/FloatingDecorativeCircle';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

export default function LifeLogs() {
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState([]);
  const [activeTag, setActiveTag] = useState('all');

  // Fetching data from backend (simulating with a static call)
  useEffect(() => {
    // Replace this with your backend API call, like fetch() or axios.get()
    const fetchedImages = [
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg', label: 'Work' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', label: 'Travel' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg', label: 'Hobby' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg', label: 'Food' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg', label: 'Work' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg', label: 'Travel' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg', label: 'Hobby' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg', label: 'Food' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg', label: 'Work' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg', label: 'Travel' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg', label: 'Hobby' },
      { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg', label: 'Food' },
    ];

    // Setting images to state
    setImages(fetchedImages);

    // Extract unique tags (labels in this case)
    const allTags = new Set(fetchedImages.map(img => img.label));

    // Adding 'all' as a default tag option
    setTags([{ id: 'all', label: 'All' }, ...Array.from(allTags).map(tag => ({ id: tag, label: tag }))]);
  }, []);

  // Filtering images based on active tag
  const filtered =
    activeTag === 'all'
      ? images
      : images.filter(img => img.label === activeTag);

  const isSmallDevice = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <PageLayout
      title="Frames & Feats"
      description="Where snapshots of my journey blend achievements and memories."
      showBackButton={false}
    >
      {!isSmallDevice && (
        <>
          <FloatingDecorativeCircle className="absolute top-0 left-2 w-48 h-48 border" />
          <FloatingDecorativeCircle className="absolute bottom-24 right-8 w-48 h-48 border" />
        </>
      )}
      <AnimatedPage>
        <AnimatedSection>
          <TagFilter
            tabs={tags}
            activeTab={activeTag}
            onTabChange={setActiveTag}
          />
        </AnimatedSection>

        <motion.div
          className="columns-2 md:columns-4 gap-4 space-y-4"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate="show"
        >
          {filtered.map((img, idx) => (
            <motion.img
              key={idx}
              src={img.src}
              alt="life log"
              className="w-full mb-4 break-inside-avoid rounded-lg"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            />
          ))}
        </motion.div>
      </AnimatedPage>
    </PageLayout>
  );
}
