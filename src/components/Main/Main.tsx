import './main.scss';

type Props = { children?: any };

const Main = ({ children }: Props) => {
  return (
    <main className="main" role="main">
      <div className="inner">{children}</div>
    </main>
  );
};

export default Main;
