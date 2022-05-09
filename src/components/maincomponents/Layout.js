import { Header } from "./Header";
import { Footer } from "./Footer";
import { SearchInput } from "../SearchInput";
import layout from "../Layout.module.css";
import chuck from "../images/norris-cartoon-pics-transparent.png";

export function Layout({ children }) {
  return (
    <div>
      <div className={layout.layout}>
        <div className={layout.SideBar}>
          <SearchInput />
        </div>
        <div className={layout.mainpage}>
          <Header />
          <div className={layout.maincontent}>
            <img src={chuck} alt="chuck" style={{ width: "20%" }} />
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
