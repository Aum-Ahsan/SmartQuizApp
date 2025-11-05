import logoImg from "../assets/quiz-logo.png";
export default function Header() {
  {console.log('Header rendered')}
  return (
    <header>
      <h1>
        Quiz Forge
        <img src={logoImg} alt="Log for the App" />
      </h1>
      <h3>Sharpen Your Coding Knowledge</h3>
    </header>
  );
}
