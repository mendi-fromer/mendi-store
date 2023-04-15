type visibilityOptions = "always" | "SignedIn" | "SignedOut";

interface NavbarLinkProps {
  signingVisibility: visibilityOptions;
  isUserSignedIn: boolean;
  linkComponent: JSX.Element | null;
}

export const NavbarLink = ({
  signingVisibility,
  linkComponent,
  isUserSignedIn,
}: NavbarLinkProps) =>
  calculateVisibility(
    isUserSignedIn,
    signingVisibility,
    <li>{linkComponent}</li>
  );
const calculateVisibility = (
  isUserSignedIn: boolean,
  visibility: visibilityOptions,
  element: JSX.Element
) => {
  if (!(visibility === "always")) {
    return (isUserSignedIn && visibility === "SignedIn") ||
      (!isUserSignedIn && visibility === "SignedOut") ? (
      element
    ) : (
      <></>
    );
  } else {
    return element;
  }
};
