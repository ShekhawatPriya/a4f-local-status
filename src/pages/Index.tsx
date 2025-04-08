
import StatusPage from "@/components/StatusPage";
import { useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";

const Index = () => {
  // Initialize theme (this ensures dark mode works correctly on initial load)
  const { theme } = useTheme();
  
  useEffect(() => {
    // Set page title
    document.title = "A4F Status | DevsDoCode";
  }, []);

  return <StatusPage />;
};

export default Index;
