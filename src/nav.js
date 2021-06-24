// eslint-disable-next-line
function Nav()
{
  return(
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">NBA Search</a>
          
          <div>
            <ul class="navbar-nav me-auto">
            <li class="nav-item">
                <a class="nav-link" href="/home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/PlayerStats">Player Stats</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/TeamStats">Team Info</a>
              </li>
            </ul>
          </div>    
        </div>
      </nav>
  );
}
export default Nav;