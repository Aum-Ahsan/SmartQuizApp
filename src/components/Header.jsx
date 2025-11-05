import logoImg from "../assets/quiz-logo.png";
export default function Header() {
  {console.log('Header rendered')}
  return (
    <header>
      <h1>
    Smart Quiz        <img src={logoImg} alt="Log for the App" />
      </h1>
      <h2>Master Code, One Quiz at a Time.</h2>
    </header>
  );
}
