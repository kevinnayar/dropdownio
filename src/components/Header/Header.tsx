import './header.scss';

type Props = { title: string };

const Header = ({ title }: Props) => {
  return (
    <header className="header" role="banner">
      <div className="inner">
        <h1 className="header__title">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
