import { Button } from './components/Button';

export const App = () => {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div className="grid h-dscreen place-content-center">
      <Button label="Bra knapp" onClick={handleClick} />
    </div>
  );
};
