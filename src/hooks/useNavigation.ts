import { useContext } from "react";
import { navigationContext } from "../context/navigation";

export default function useNavigation() {
  return useContext(navigationContext);
}
