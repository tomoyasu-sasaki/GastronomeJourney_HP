'use client';

import ScrollToTopButton from './ScrollToTopButton';

export default function ScrollToTopButtonWrapper() {
  return (
    <ScrollToTopButton
      threshold={300}
      size="md"
      position="right"
      color="primary"
      bottom={30}
    />
  );
} 