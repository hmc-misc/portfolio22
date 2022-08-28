async function navHome()
{
    await pageRouter("projects", "remove");
    await pageRouter("bio", "remove");
    await pageRouter("home", "display");
}

async function navBio()
{
    await pageRouter("projects", "remove");
    await pageRouter("home", "remove");
    await pageRouter("bio", "display");
}

async function navProjects()
{
    await pageRouter("bio", "remove");
    await pageRouter("home", "remove");
    await pageRouter("projects", "display");
}

document.querySelector(".nav-about").addEventListener("click", navBio)
document.querySelector(".nav-home").addEventListener("click", navHome)
document.querySelector(".nav-sites").addEventListener("click", navProjects)