export const scrollToSection = (ref, offset) => {
  const container = document.documentElement;
  const top = ref.current.offsetTop - offset;

  container.scrollTo({
    top,
    behavior: "smooth",
  });
};
