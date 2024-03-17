import AnnouncementBar from "./components/AnnouncementBar";
import { MegaMenuWithHover } from "./components/MaterialMegaMenu";

import { ThemeProvider } from "./provider/theme-provider";

function App() {
  return (
    <>
      <AnnouncementBar />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <MegaMenuWithHover/>
      </ThemeProvider>
    </>
  );
}

export default App;
