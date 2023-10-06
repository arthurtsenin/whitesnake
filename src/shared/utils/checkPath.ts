export const checkPath = (
  pathname: string,
  href: string,
  handler?: () => void,
) => {
  handler && pathname === href ? handler() : null;
};
