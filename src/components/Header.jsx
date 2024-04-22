function Header() {
    return (
        <header className="header">
            <div className="container d-flex align-items-center space-between">
            <span className="logo">Фильм</span>
            <ul className="nav">
                <li className="nav-list">
                    <span className="nav-link"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-ticket-perforated-fill" viewBox="0 0 16 16">
  <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zm4-1v1h1v-1zm1 3v-1H4v1zm7 0v-1h-1v1zm-1-2h1v-1h-1zm-6 3H4v1h1zm7 1v-1h-1v1zm-7 1H4v1h1zm7 1v-1h-1v1zm-8 1v1h1v-1zm7 1h1v-1h-1z"/>
</svg></span>
                </li>
            </ul>
        </div>
        </header>
    )
}

export default Header;