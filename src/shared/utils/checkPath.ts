export const checkPath = (
  pathname: string | null,
  href: string,
  handler?: () => void,
) => {
  handler && pathname === href ? handler() : null;
};
