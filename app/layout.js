import Links from "./components/Links";
import "./globals.css";

export default function RootLayout(props) {
  const isLogged = false

  return (
    <html lang="en">
      <body>
        <Links />

        {props.children}
        
        {isLogged ? props.team : props.analytics}
      </body>
    </html>
  );
}
