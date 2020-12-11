import { Header } from "../Header";
export const Layout: React.FC = ({ children }) => {
  return (
  <div>
    <Header />
    {children}
  </div>
  );
}
