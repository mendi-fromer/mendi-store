import { UserButton } from "@clerk/nextjs";
import { MockLink } from "./mockLink";
import { NavbarLink } from "./navbarLink";
import { SignInLink } from "./signInLink";

export const links = (isUserSignedIn: boolean) => [
  NavbarLink({
    signingVisibility: "SignedOut",
    isUserSignedIn,
    linkComponent: SignInLink(),
  }),
  NavbarLink({
    signingVisibility: "always",
    isUserSignedIn,
    linkComponent: MockLink({ displayName: "Always" }),
  }),
  NavbarLink({
    signingVisibility: "SignedOut",
    isUserSignedIn,
    linkComponent: MockLink({ displayName: "SignedOutOnly" }),
  }),
  NavbarLink({
    signingVisibility: "SignedIn",
    isUserSignedIn,
    linkComponent: MockLink({ displayName: "SignedInOnly" }),
  }),
  NavbarLink({
    signingVisibility: "SignedIn",
    isUserSignedIn,
    linkComponent: UserButton({}),
  }),
];
