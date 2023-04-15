interface MockLinkProps {
  displayName: string;
}

export const MockLink = ({ displayName: linkName }: MockLinkProps) => (
  <a
    href="#"
    className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
  >
    {linkName}
  </a>
);
