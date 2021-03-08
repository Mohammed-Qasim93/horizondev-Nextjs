export const ParentAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.5,
      ease: "easeOut",
    },
  },
};

export const FadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,

      when: "beforeChildren",
      staggerChildren: 0.5,
      ease: "easeOut",
    },
  },
};

export const buttonAnim = {
  hidden: {
    y: "-100vh",
  },
  show: {
    y: 0,
    transition: {
      duration: 2,
      type: "spring",
      delay: 1.8,
      stiffness: 100,
      ease: "easeOut",
    },
  },
};

export const titleAnim = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
export const subTitleAnim = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.6,
    },
  },
};

export const photoAnim = {
  hidden: {
    opacity: 0,
    scale: 1.2,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,

      ease: "easeOut",
    },
  },
};
