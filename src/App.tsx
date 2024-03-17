import AnnouncementBar from "./components/AnnouncementBar";
import { MegaMenuWithHover } from "./components/MaterialMegaMenu";

import { ThemeProvider } from "./provider/theme-provider";
import { motion } from "framer-motion";
import { transition1 } from "./transitions";
import { CardDemo } from "./components/SearchBar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <AnnouncementBar />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <motion.div
          initial={{ opacity: 0, y: "-70%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-40%" }}
          transition={{ ...transition1, duration: 0.7 }}
          className=" border-b"
        >
          <MegaMenuWithHover />
        </motion.div>
        <CardDemo />
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
