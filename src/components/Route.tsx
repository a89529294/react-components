import useNavigation from "../hooks/useNavigation";

function Route({ children, path }: { children: JSX.Element; path: string }) {
  const { currentPath } = useNavigation();
  return currentPath === path ? children : null;
}

export default Route;
