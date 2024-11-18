const signOut = () => {
    prompt("Are about to log out?");
    
    localStorage.removeItem('userID');
    window.location.href='./admin.html';
}