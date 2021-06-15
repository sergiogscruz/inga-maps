export const UserAnonymousHelper = {
    initializeUserAnonymous: function() {
        if (!localStorage.getItem('user')) {
            localStorage.setItem('user', JSON.stringify({
              name: "Anônimo",
              personType: "TOURIST_ANONYMOUS",
              photo: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png",
              token: "Basic YW5vbmltbzppbmdhbWFwcw=="
            }))
        }
    }
}