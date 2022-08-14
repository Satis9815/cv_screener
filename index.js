let data = [
    {
        name: "Satis Kumar Chaudhary",
        age: 22,
        role: "Programmer",
        address: "Jhumka",
        image:"satis.PNG"
    },
    {
        name: "Soman Kumar Yadav",
        age: 20,
        role: "bussinessman",
        address: "saptari",
        image:"soman.PNG"
    },
    {
        name: "Yogesh Chaudhary",
        age: 30,
        role: "Full stak developer",
        address: "Biratnagar",
        image:"yogesh.PNG"
    },
    {
        name: "Toran Shreshtha",
        age: 26,
        role: "Designer",
        address: "Janakpur",
        image:"toran.PNG"
    },
    {
        name: "Sudhir Kumar Chaudhary",
        age: 22,
        role: "Programmer",
        address: "Jhumka",
        image:"sudhir.PNG"
    }
]

function profileIterator(profiles) {
    let index = 0;
    return {
        next: function () {
            return index < profiles.length
                ? { value: profiles[index++], done: false }
                : { done: true };
        }
    }
}

let iterateProfile = profileIterator(data);
iterateDataOfProfiles();

let next = document.getElementById('next');
console.log(next);
next.addEventListener('click', iterateDataOfProfiles);
function iterateDataOfProfiles() {
    const profileData = iterateProfile.next().value;
    if (profileData != undefined) {
        let images = document.getElementById('images');
        let profiles = document.getElementById('profiles');
        console.log(images, profiles);
        console.log("Iterating data...")
        images.innerHTML = `<img src="${profileData.image}" style="height:150px;width:150px;border-radius:10px;">`
        profiles.innerHTML = `
    <p style="margin:0px;font-weight:600;">Name:${profileData.name}</p>
    <p style="margin:0px;font-weight:600;">Age:${profileData.age}</p>
    <p style="margin:0px;font-weight:600;">Role:${profileData.role}</p>
    <p style="margin:0px;font-weight:600;">Address:${profileData.address}</p>
    `
    profiles.style.display='flex';
    profiles.style.justifyContent='center';
    profiles.style.alignItems='center';
    profiles.style.flexDirection='column';

    }
    else{
        alert("Go to start profile");
        window.location.reload();
    }


}

